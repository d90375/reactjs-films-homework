import React from "react";
import { Provider } from "react-redux";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { renderHook } from "@testing-library/react-hooks";
import useTrailerActions from "../trailerActions";
import { API, KEY, LANG } from "../../../constants";
import { FETCH_TRAILER_FULFILLED, FETCH_TRAILER_PENDING, FETCH_TRAILER_REJECTED } from "../../actionTypes";

describe("modules > trailer > useTrailer", () => {
  const id = "724989";

  const cfgTrailerUrl = `${API}movie/${id}/videos${KEY}${LANG}`;

  const mockStore = configureStore([thunk]);

  const store = mockStore({
    trailer: {
      isLoadingTrailer: false,
      isFulfilledTrailer: false,
      hasErrorTrailer: false
    }
  });

  const setUp = (props) => {
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    const { result } = renderHook(() => useTrailerActions(props), {
      wrapper
    });

    return result;
  };

  it("returns function", () => {
    const result = setUp(724989);

    expect(result.current.handleShowTrailer).toBeInstanceOf(Function);
  });

  describe("handleShowTrailer", () => {
    const mockAxios = new MockAdapter(axios);

    const mockNetworkError = () => {
      mockAxios.onGet(cfgTrailerUrl).networkError();
    };

    const mock404 = () => {
      mockAxios.onGet(cfgTrailerUrl).reply(404);
    };

    const mockTimeout = () => {
      mockAxios.onGet(cfgTrailerUrl).timeout();
    };

    afterEach(() => {
      mockAxios.resetHandlers();
      store.clearActions();
    });

    it(`it handles successful API query`, async () => {
      const result = setUp(724989);

      const response = {
        id: 724989,
        results: [
          {
            key: "7Y6-w5Psupw"
          }
        ]
      };

      mockAxios.onGet(cfgTrailerUrl).reply(200, response);

      await result.current.handleShowTrailer();

      expect(store.getActions()[0]).toEqual({
        type: FETCH_TRAILER_PENDING
      });
      expect(store.getActions()[1].type).toEqual(FETCH_TRAILER_FULFILLED);
      expect(store.getActions()[1].payload.data).toEqual(response);
    });

    it(`it handle reset to default state`, async () => {
      const result = setUp(724989);

      const response = {
        id: 0,
        results: [
          {
            key: "qwe"
          }
        ]
      };

      mockAxios.onGet(cfgTrailerUrl).reply(200, response);

      await result.current.handleShowTrailer();
      await result.current.handleRemoveVideoFrame();

      expect(store.getActions()[1].payload.data).toEqual(response);
    });

    it.each([[mockNetworkError], [mock404], [mockTimeout]])(`it handles API fetching errors`, async (response) => {
      let hasErrorThrown;

      const result = setUp(724989);

      response();

      try {
        await result.current.handleShowTrailer();
      } catch {
        hasErrorThrown = true;
      } finally {
        expect(store.getActions()[0]).toEqual({
          type: FETCH_TRAILER_PENDING
        });
        expect(store.getActions()[1].type).toEqual(FETCH_TRAILER_REJECTED);
        expect(store.getActions()[1].payload).toBeInstanceOf(Error);
        expect(store.getActions()[1].payload).toMatchSnapshot();
        expect(hasErrorThrown).toBe(true);
      }
    });
  });
});

import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { renderHook } from "@testing-library/react-hooks";
import { useTrailer } from "../trailerSelectors";

describe("modules > trailer > useTrailer/useTrailerData", () => {
  const mockStore = configureStore([]);
  const state = "trailer";

  const store = mockStore({
    trailer: state
  });

  it("returns trailer value", () => {
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    const { result } = renderHook(() => useTrailer(), {
      wrapper
    });
    expect(result.current).toBe(state);
  });

  // it("returns trailer data value", () => {
  //   const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  //   const { result } = renderHook(() => useTrailerData(), {
  //     wrapper
  //   });
  //
  //   expect(result.current).toBe(state);
  // });
});

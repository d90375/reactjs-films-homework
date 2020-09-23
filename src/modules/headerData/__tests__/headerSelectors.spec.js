import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { renderHook } from "@testing-library/react-hooks";
import { useCurrentMovieData, useCurrentMovie } from "../headerSelectors";

describe("modules > header > useCurrentMovie/useCurrentMovieData", () => {
  const mockStore = configureStore([]);
  const state = "header";

  const store = mockStore({
    header: state
  });

  it("returns current movie value", () => {
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    const { result } = renderHook(() => useCurrentMovie(), {
      wrapper
    });
    expect(result.current).toBe(state);
  });

  it("returns current movie data value", () => {
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    const { result } = renderHook(() => useCurrentMovieData(), {
      wrapper
    });

    expect(result.current).toBe(state);
  });
});

import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { renderHook } from "@testing-library/react-hooks";
import { useMovieListData, useMovieList } from "../movieListSelectors";

describe("modules > movieList > useMovieList/useMovieListData", () => {
  const mockStore = configureStore([]);
  const state = "movie";

  const store = mockStore({
    movieList: state
  });

  it("returns movie list value", () => {
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    const { result } = renderHook(() => useMovieList(), {
      wrapper
    });
    expect(result.current).toBe(state);
  });

  it("returns movie list data value", () => {
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    const { result } = renderHook(() => useMovieListData(), {
      wrapper
    });

    expect(result.current).toBe(state);
  });
});

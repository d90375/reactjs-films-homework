import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import MovieListContainer from "../MovieList.container";

describe("MovieListContainer component", () => {
  let component;

  const mockStore = configureStore([thunk]);

  const store = mockStore({
    mock: {
      mock: "mock"
    }
  });

  const setUp = (props) => {
    return shallow(
      <Provider store={store}>
        <MovieListContainer {...props} />
      </Provider>
    );
  };

  beforeEach(() => {
    component = setUp();
  });

  it("should render connected component MovieListContainer", () => {
    expect(component.find(MovieListContainer).length).toEqual(1);
  });

  it("should check props matches with store", () => {
    expect(component.find(MovieListContainer).props.output).toEqual(store.output);
  });

  it("should render MovieListContainer component without props", () => {
    expect(component).toMatchSnapshot();
  });
});

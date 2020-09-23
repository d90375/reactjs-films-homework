import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import SearchContainer from "../Search.container";

describe("SearchContainer component", () => {
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
        <SearchContainer {...props} />
      </Provider>
    );
  };

  beforeEach(() => {
    component = setUp();
  });

  it("should render connected component SearchContainer", () => {
    expect(component.find(SearchContainer).length).toEqual(1);
  });

  it("should check props matches with store", () => {
    expect(component.find(SearchContainer).props.output).toEqual(store.output);
  });

  it("should render SearchContainer component without props", () => {
    expect(component).toMatchSnapshot();
  });
});

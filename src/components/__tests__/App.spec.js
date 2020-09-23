import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import App from "../App";

describe("App component", () => {
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
        <App {...props} />
      </Provider>
    );
  };

  beforeEach(() => {
    component = setUp();
  });

  it("should render connected component App", () => {
    expect(component.find(App).length).toEqual(1);
  });

  it("should check props matches with store", () => {
    expect(component.find(App).props.output).toEqual(store.output);
  });

  it("should render App component without props", () => {
    expect(component).toMatchSnapshot();
  });
});

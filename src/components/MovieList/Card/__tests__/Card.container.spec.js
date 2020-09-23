import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import CardContainer from "../Card.container";

describe("CardContainer component", () => {
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
        <CardContainer {...props} />
      </Provider>
    );
  };

  beforeEach(() => {
    component = setUp();
  });

  const mockProps = {
    cardItem: { cardItem: "cardItem" },
    genresItems: {
      genresItems: "genresItems"
    },
    cardIndex: 0
  };

  it("should render connected component Card", () => {
    expect(component.find(CardContainer).length).toEqual(1);
  });

  it("should check props matches with store", () => {
    expect(component.find(CardContainer).props.output).toEqual(store.output);
  });

  it("should render Card component without props", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render Card component with props", () => {
    component = setUp({ ...mockProps });
    expect(component).toMatchSnapshot();
  });
});

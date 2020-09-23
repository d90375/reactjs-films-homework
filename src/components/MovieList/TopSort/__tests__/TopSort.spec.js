import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import TopSort from "../TopSort";

describe("TopSort component", () => {
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
        <TopSort {...props} />
      </Provider>
    );
  };

  beforeEach(() => {
    component = setUp();
  });

  // beforeEach(() => {
  //   component = setUp();
  //   const data = {};
  //   const mockDispatch = jest.fn();
  //   jest.mock("react-redux", () => ({
  //     useSelector: jest.fn(),
  //     useDispatch: () => mockDispatch
  //   }));
  //   const mockedDispatch = jest.fn();
  //   useSelector.mockImplementation((selectorFn) => selectorFn(data));
  //   useDispatch.mockReturnValue(mockedDispatch);
  //   expect(mockDispatch).toHaveBeenCalledWith();
  // });
  //

  it("should render connected component TopSort", () => {
    expect(component.find(TopSort).length).toEqual(1);
  });

  it("should check props matches with store", () => {
    expect(component.find(TopSort).props.output).toEqual(store.output);
  });

  it("should render ButtonWatchNow component without props", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render ButtonWatchNow component with props", () => {
    component = setUp({ genres: { obj: "obj" } });
    expect(component).toMatchSnapshot();
  });

  describe("defaultProps", () => {
    it("should use default onSelectChange", () => {
      const res = TopSort.defaultProps.onSelectChange();
      expect(res).toBe(undefined);
    });
  });
});

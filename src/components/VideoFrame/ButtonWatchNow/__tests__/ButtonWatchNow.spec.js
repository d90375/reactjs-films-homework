import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import ButtonWatchNow from "../ButtonWatchNow";

describe("ButtonWatchNow component", () => {
  let component;

  const mockStore = configureStore([thunk]);

  const store = mockStore({
    trailer: {
      isLoadingTrailer: false,
      isFulfilledTrailer: false,
      hasErrorTrailer: false
    }
  });

  const setUp = (props) => {
    return shallow(
      <Provider store={store}>
        <ButtonWatchNow {...props} />
      </Provider>
    );
  };

  beforeEach(() => {
    component = setUp();
  });

  it("should render connected component ButtonWatchNow", () => {
    expect(component.find(ButtonWatchNow).length).toEqual(1);
  });

  it("should check props matches with store", () => {
    expect(component.find(ButtonWatchNow).props.output).toEqual(store.output);
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

  it("should render ButtonWatchNow component without props", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render ButtonWatchNow component with props", () => {
    component = setUp({ movieId: 999 });
    expect(component).toMatchSnapshot();
  });
});

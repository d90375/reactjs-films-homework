import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import VideoFrameContainer from "../VideoFrame.container";

describe("VideoFrameContainer component", () => {
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
        <VideoFrameContainer {...props} />
      </Provider>
    );
  };

  beforeEach(() => {
    component = setUp();
  });

  it("should render connected component VideoFrameContainer", () => {
    expect(component.find(VideoFrameContainer).length).toEqual(1);
  });

  it("should check props matches with store", () => {
    expect(component.find(VideoFrameContainer).props.output).toEqual(store.output);
  });

  it("should render VideoFrameContainer component without props", () => {
    expect(component).toMatchSnapshot();
  });
});

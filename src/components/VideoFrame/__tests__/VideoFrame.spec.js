import React from "react";
import VideoFrame from "../VideoFrame";

const setUp = (props) => {
  return shallow(<VideoFrame {...props} />);
};

describe("VideoFrame component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("should render VideoFrame component without props", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render VideoFrame component with props", () => {
    component = setUp({ trailerKey: "key" });
    expect(component).toMatchSnapshot();
  });

  describe("should handler", () => {
    it("should call onHideView method", () => {
      const mockCallBack = jest.fn();
      component = setUp({ onRemoveVideoFrame: mockCallBack });
      expect(mockCallBack.mock.calls.length).toBe(0);
      component.find(".videoFrame__btn").simulate("click");
      expect(mockCallBack.mock.calls.length).toBe(1);
    });
  });
});

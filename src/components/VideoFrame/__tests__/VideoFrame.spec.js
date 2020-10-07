import React from "react";
import VideoFrame from "../VideoFrame";

describe("VideoFrame", () => {
  let component;

  const mockFunction = jest.fn();

  it("should render VideoFrame component without props", () => {
    component = shallow(<VideoFrame onRemoveVideoFrame={mockFunction} />);
    expect(component).toMatchSnapshot();
  });

  it("should render VideoFrame component with props", () => {
    component = shallow(<VideoFrame onRemoveVideoFrame={mockFunction} trailerKey="trailerKey" />);
    expect(component).toMatchSnapshot();
  });

  describe("should handler", () => {
    it("should call onHideView method", () => {
      component = shallow(<VideoFrame onRemoveVideoFrame={mockFunction} />);
      expect(mockFunction.mock.calls.length).toBe(0);
      component.find(".videoFrame__btn").simulate("click");
      expect(mockFunction.mock.calls.length).toBe(1);
    });
  });
});

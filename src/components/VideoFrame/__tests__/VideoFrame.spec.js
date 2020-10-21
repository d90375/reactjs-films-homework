import React from "react";
import { shallow } from "enzyme";
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
      component.find("[data-id='video-frame-btn']").simulate("click");
      expect(mockFunction.mock.calls.length).toBe(1);
    });
  });
});

import React from "react";
import Notation from "../Notation";

const setUp = (props) => {
  return shallow(<Notation {...props} />);
};

describe("Notation component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  const mockProps = {
    movieId: 999,
    isHiddenViewWindow: true,
    overview: "overview"
  };

  it("should render Notation component without props", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render Notation component with props", () => {
    component = setUp({ ...mockProps });
    expect(component).toMatchSnapshot();
  });

  describe("should handler", () => {
    it("should call onHideView method", () => {
      const mockCallBack = jest.fn();
      component = setUp({ onHideView: mockCallBack });
      expect(mockCallBack.mock.calls.length).toBe(0);
      component.find(".btn__view").simulate("click");
      expect(mockCallBack.mock.calls.length).toBe(1);
    });
  });
});

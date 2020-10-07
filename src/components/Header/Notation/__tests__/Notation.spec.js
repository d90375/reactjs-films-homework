import React from "react";
import Notation from "../Notation";

describe("Notation", () => {
  let component;

  const mockProps = {
    movieId: 999,
    isHiddenViewWindow: true,
    overview: "overview"
  };

  const mockCallBack = jest.fn();

  it("should render Notation component without props", () => {
    component = shallow(<Notation onToggleView={mockCallBack} />);
    expect(component).toMatchSnapshot();
  });

  it('should render Notation component with props = (movieId: 999, isHiddenViewWindow: true, overview: "overview")', () => {
    component = shallow(<Notation onToggleView={mockCallBack} {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  describe("should handler", () => {
    it("should call onHideView method", () => {
      component = shallow(<Notation onToggleView={mockCallBack} />);
      expect(mockCallBack.mock.calls.length).toBe(0);
      component.find(".btn__view").simulate("click");
      expect(mockCallBack.mock.calls.length).toBe(1);
    });
  });
});

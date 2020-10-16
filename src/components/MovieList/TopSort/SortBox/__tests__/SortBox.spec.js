import React from "react";
import { shallow } from "enzyme";
import SortBox from "../SortBox";

describe("SortBox", () => {
  let component;

  const mockCallBacks = {
    onSwitchToSquare: jest.fn(),
    onSwitchToLine: jest.fn()
  };

  it("should render SortBox component without props", () => {
    component = shallow(<SortBox {...mockCallBacks} />);
    expect(component).toMatchSnapshot();
  });

  it("should render SortBox component with props", () => {
    component = shallow(<SortBox isDisplayCardDirection="line" {...mockCallBacks} />);
    expect(component).toMatchSnapshot();
  });

  describe("handlers", () => {
    it("should call onSwitchToSquare method", () => {
      expect(mockCallBacks.onSwitchToSquare.mock.calls.length).toBe(0);
      component.find(".format__box4").simulate("click");
      expect(mockCallBacks.onSwitchToSquare.mock.calls.length).toBe(1);
    });

    it("should call onSwitchToLine method", () => {
      expect(mockCallBacks.onSwitchToLine.mock.calls.length).toBe(0);
      component.find(".format__box2").simulate("click");
      expect(mockCallBacks.onSwitchToLine.mock.calls.length).toBe(1);
    });
  });
});

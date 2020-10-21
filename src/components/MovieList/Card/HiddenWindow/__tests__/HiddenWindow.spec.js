import React from "react";
import { shallow } from "enzyme";
import HiddenWindow from "../HiddenWindow";

describe("HiddenWindow", () => {
  let component;

  const mockCallBacks = {
    onShowInfo: jest.fn(),
    onShowTrailer: jest.fn()
  };

  it("should render HiddenWindow component", () => {
    component = shallow(<HiddenWindow {...mockCallBacks} />);
    expect(component).toMatchSnapshot();
  });

  describe("should handler", () => {
    it("should call onShowInfo method", () => {
      component = shallow(<HiddenWindow {...mockCallBacks} />);
      expect(mockCallBacks.onShowInfo.mock.calls.length).toBe(0);
      component.find("[data-id='hidden-window-infoBtn']").simulate("click");
      expect(mockCallBacks.onShowInfo.mock.calls.length).toBe(1);
    });

    it("should call onShowTrailer method", () => {
      component = shallow(<HiddenWindow {...mockCallBacks} />);
      expect(mockCallBacks.onShowTrailer.mock.calls.length).toBe(0);
      component.find("[data-id='hidden-window-playBtn']").simulate("click");
      expect(mockCallBacks.onShowTrailer.mock.calls.length).toBe(1);
    });
  });
});

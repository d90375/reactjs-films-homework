import React from "react";
import HiddenWindow from "../HiddenWindow";

const setUp = (props) => {
  return shallow(<HiddenWindow {...props} />);
};

describe("HiddenWindow component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render HiddenWindow component", () => {
    expect(component).toMatchSnapshot();
  });

  describe("defaultProps", () => {
    it("should use default onShowInfo", () => {
      const result = HiddenWindow.defaultProps.onShowInfo();
      expect(result).toBe(undefined);
    });
    it("should use default onShowTrailer", () => {
      const result = HiddenWindow.defaultProps.onShowTrailer();
      expect(result).toBe(undefined);
    });
  });
});

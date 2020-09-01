import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Notation from "../Notation";

const renderer = new ShallowRenderer();
const setUp = (props) => {
  return renderer.render(<Notation {...props} />);
};

describe("Notation component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Notation component", () => {
    expect(component).toMatchSnapshot();
  });
});

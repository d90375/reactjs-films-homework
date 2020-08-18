import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Header from "../Header";

const renderer = new ShallowRenderer();
const setUp = (props) => {
  renderer.render(<Header {...props} />);
  return renderer.getRenderOutput();
};

describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Header component", () => {
    expect(component).toMatchSnapshot();
  });
});

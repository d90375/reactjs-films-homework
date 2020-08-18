import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Footer from "../Star";

const renderer = new ShallowRenderer();
const setUp = (props) => {
  return renderer.render(<Footer {...props} />);
};

describe("Star component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Star component", () => {
    expect(component).toMatchSnapshot();
  });
});

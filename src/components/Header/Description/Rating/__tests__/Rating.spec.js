import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Footer from "../Rating";

const renderer = new ShallowRenderer();
const setUp = (props) => {
  return renderer.render(<Footer {...props} />);
};

describe("Rating component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Rating component", () => {
    expect(component).toMatchSnapshot();
  });
});

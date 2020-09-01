import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Footer from "../Footer";

const renderer = new ShallowRenderer();
const setUp = (props) => {
  return renderer.render(<Footer {...props} />);
};

describe("Footer component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Posts component", () => {
    expect(component).toMatchSnapshot();
  });
});

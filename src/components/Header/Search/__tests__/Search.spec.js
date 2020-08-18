import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Search from "../Search";

const renderer = new ShallowRenderer();
const setUp = (props) => {
  return renderer.render(<Search {...props} />);
};

describe("Search component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Search component", () => {
    expect(component).toMatchSnapshot();
  });
});

import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Preloader from "../Preloader";

const renderer = new ShallowRenderer();
const setUp = (props) => {
  return renderer.render(<Preloader {...props} />);
};

describe("Preloader component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Preloader component", () => {
    expect(component).toMatchSnapshot();
  });
});

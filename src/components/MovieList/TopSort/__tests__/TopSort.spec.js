import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import TopSort from "../TopSort";

const renderer = new ShallowRenderer();
const setUp = (props) => {
  return renderer.render(<TopSort {...props} />);
};

describe("TopSort component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render TopSort component", () => {
    expect(component).toMatchSnapshot();
  });
});

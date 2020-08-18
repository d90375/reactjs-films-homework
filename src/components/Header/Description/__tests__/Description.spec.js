import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Description from "../Description";

const renderer = new ShallowRenderer();
const setUp = (props) => {
  return renderer.render(<Description {...props} />);
};

describe("Description component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Description component", () => {
    expect(component).toMatchSnapshot();
  });
});

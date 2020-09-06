import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Card from "../Card";

const renderer = new ShallowRenderer();
const setUp = (props) => {
  return renderer.render(<Card {...props} />);
};

describe("Card component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Card component", () => {
    expect(component).toMatchSnapshot();
  });
});

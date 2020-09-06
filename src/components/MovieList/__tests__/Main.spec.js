import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import MovieList from "../Main";

const renderer = new ShallowRenderer();
const setUp = (props) => {
  return renderer.render(<MovieList {...props} />);
};

describe("Main component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Main component", () => {
    expect(component).toMatchSnapshot();
  });
});

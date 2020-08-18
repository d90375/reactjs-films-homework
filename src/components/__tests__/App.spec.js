import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import App from "../App";

const renderer = new ShallowRenderer();
const setUp = (props) => {
  return renderer.render(<App {...props} />);
};

describe("App component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render App component", () => {
    expect(component).toMatchSnapshot();
  });
});

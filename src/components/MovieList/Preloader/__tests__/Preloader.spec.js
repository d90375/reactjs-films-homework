import React from "react";
import Preloader from "../Preloader";

const setUp = (props) => {
  return shallow(<Preloader {...props} />);
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

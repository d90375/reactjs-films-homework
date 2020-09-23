import React from "react";
import Footer from "../Footer";

const setUp = (props) => {
  return shallow(<Footer {...props} />);
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

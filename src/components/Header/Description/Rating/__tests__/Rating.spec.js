import React from "react";
import Footer from "../Rating";

const setUp = (props) => {
  return shallow(<Footer {...props} />);
};

describe("Rating component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Rating component without props", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render Rating component with props", () => {
    component = setUp({ voteAverage: 10 });
    expect(component).toMatchSnapshot();
  });
});

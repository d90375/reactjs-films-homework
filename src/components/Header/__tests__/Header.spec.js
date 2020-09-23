import React from "react";
import Header from "../Header";

const setUp = (props) => {
  shallow(<Header {...props} />);
};

describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render Header component without props ", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render Header component with props ", () => {
    component = setUp();
    expect(component).toMatchSnapshot();
  });
});

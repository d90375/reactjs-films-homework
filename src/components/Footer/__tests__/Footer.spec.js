import React from "react";
import Footer from "../Footer";

describe("Footer component", () => {
  let component;

  it("should render Posts component", () => {
    component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });
});

import React from "react";
import Preloader from "../Preloader";

describe("Preloader component", () => {
  let component;

  it("should render Preloader component", () => {
    component = shallow(<Preloader />);
    expect(component).toMatchSnapshot();
  });
});

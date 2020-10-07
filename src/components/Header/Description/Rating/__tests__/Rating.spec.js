import React from "react";
import Footer from "../Rating";

describe("Rating", () => {
  let component;

  it("should render Rating component without props", () => {
    component = shallow(<Footer />);
    expect(component).toMatchSnapshot();
  });

  it("should render Rating component with correct props", () => {
    component = shallow(<Footer voteAverage={9} />);
    expect(component).toMatchSnapshot();
  });

  it("should render Rating component with not correct props", () => {
    component = shallow(<Footer voteAverage={99} />);
    expect(component).toMatchSnapshot();
  });
});

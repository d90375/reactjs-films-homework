import React from "react";
import SortBox from "../SortBox";

describe("SortBox", () => {
  let component;

  it("should render SortBox component", () => {
    component = shallow(<SortBox />);
    expect(component).toMatchSnapshot();
  });
});

import React from "react";
import MovieList from "../MovieList";

describe("Main", () => {
  let component;

  const mockProps = {
    data: [{ data: "data", id: 1 }],
    genres: { 12: "12" }
  };

  it("should render Main component without props", () => {
    component = shallow(<MovieList />);
    expect(component).toMatchSnapshot();
  });

  it("should render Main component without cards ", () => {
    component = shallow(<MovieList cardLength={0} {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  it("should render Main component with cards", () => {
    component = shallow(<MovieList cardLength={5} {...mockProps} />);
    expect(component).toMatchSnapshot();
  });
});

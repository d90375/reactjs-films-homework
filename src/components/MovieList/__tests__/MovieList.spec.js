import React from "react";
import MovieList from "../MovieList";

const setUp = (props) => {
  return shallow(<MovieList {...props} />);
};

describe("Main component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  const mockProps = {
    data: [{ data: "data", id: 1 }],
    genres: { 12: "12" }
  };

  it("should render Main component without props", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render Main component without cards ", () => {
    component = setUp({ cardLength: 0, ...mockProps });
    expect(component).toMatchSnapshot();
  });

  it("should render Main component with cards", () => {
    component = setUp({ cardLength: 5, ...mockProps });
    expect(component).toMatchSnapshot();
  });
});

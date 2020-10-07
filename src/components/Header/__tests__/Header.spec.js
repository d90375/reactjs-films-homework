import React from "react";
import Header from "../Header";

describe("Header", () => {
  let component;

  const mockProps = {
    headData: {
      vote_average: 9,
      backdrop_path: "backdrop_path",
      title: "title",
      id: 9,
      overview: "overview"
    },
    genres: "genres",
    runtime: [9, 9]
  };

  it("should render Header component without props ", () => {
    component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });

  it('should render Header component with props = (genres: "genres", runtime: [9,9])', () => {
    component = shallow(<Header {...mockProps} />);
    expect(component).toMatchSnapshot();
  });
});

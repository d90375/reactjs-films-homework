import React from "react";
import Description from "../Description";

const setUp = (props) => {
  return shallow(<Description {...props} />);
};

describe("Description component", () => {
  let component;
  const mockProps = { genres: "genres", title: "title", voteAverage: 10, runtime: [1, 1] };
  beforeEach(() => {
    component = setUp();
  });

  it("should render Description component without props", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render Description component with props", () => {
    component = setUp({ ...mockProps });
    expect(component).toMatchSnapshot();
  });
});

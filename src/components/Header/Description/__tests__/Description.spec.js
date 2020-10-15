import React from "react";
import { shallow } from "enzyme";
import Description from "../Description";

describe("Description", () => {
  let component;
  const mockProps = { genres: "genres", title: "title", voteAverage: 10, runtime: [1, 1] };

  it("should render Description component without props", () => {
    component = shallow(<Description />);
    expect(component).toMatchSnapshot();
  });

  it('should render Description component with props = (genres: "genres", title: "title", voteAverage: 10, runtime: [1, 1])', () => {
    component = shallow(<Description {...mockProps} />);
    expect(component).toMatchSnapshot();
  });
});

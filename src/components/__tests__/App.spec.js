import React from "react";
import App from "../App";

describe("App component", () => {
  let component;

  it("should render App component without props", () => {
    component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});

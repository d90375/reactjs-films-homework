import React from "react";
import NotationContainer from "../Notation.container";

const setUp = (props) => {
  return shallow(<NotationContainer {...props} />);
};

describe("Notation container component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("should render Notation container component", () => {
    expect(component).toMatchSnapshot();
  });

  // let wrapper;
  // beforeEach(() => {
  //   wrapper = shallow(<NotationContainer />);
  // });
  //
  // afterEach(() => {
  //   jest.clearAllMocks();
  // });
  //
  // describe("Notation change state", () => {
  //   it("calls setIsHiddenViewWindow to false", () => {
  //     wrapper
  //       .find("Notation")
  //       .props()
  //       .onHideView();
  //     expect(wrapper.find("Notation").props().isHiddenViewWindow).toBe(false);
  //   });
  //
  //   it("calls setIsHiddenViewWindow to true", () => {
  //     wrapper
  //       .find("Notation")
  //       .props()
  //       .onHideView();
  //     expect(wrapper.find("Notation").props().isHiddenViewWindow).toBe(true);
  //   });
  // });
});

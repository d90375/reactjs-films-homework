import React from "react";
import Tab from "../Tab";

describe("Tab", () => {
  let component;

  const mockCallBack = jest.fn();

  it("should render TopSort component without props", () => {
    component = shallow(<Tab onSelectTab={mockCallBack} />);
    expect(component).toMatchSnapshot();
  });

  it("should render TopSort component with props", () => {
    component = shallow(<Tab onSelectTab={mockCallBack}>child</Tab>);
    expect(component).toMatchSnapshot();
  });

  describe("handlers", () => {
    it("should call onSelectChange method", () => {
      component = shallow(<Tab onSelectTab={mockCallBack} />);
      expect(mockCallBack.mock.calls.length).toBe(0);
      component.find("button").simulate("click");
      expect(mockCallBack.mock.calls.length).toBe(1);
    });
  });
});

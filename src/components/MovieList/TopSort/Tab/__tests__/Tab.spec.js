import React from "react";
import { shallow } from "enzyme";
import Tab from "../Tab";

describe("Tab", () => {
  let component;

  const mockCallBack = jest.fn();

  it("should render TopSort component without props", () => {
    component = shallow(<Tab onSelectTab={mockCallBack} />);
    expect(component).toMatchSnapshot();
  });

  it("should render TopSort component with props, should changed className", () => {
    component = shallow(
      <Tab selectedTab="child" onSelectTab={mockCallBack}>
        child
      </Tab>
    );
    expect(component).toMatchSnapshot();
  });

  describe("handlers", () => {
    it("should call onSelectTab method", () => {
      component = shallow(<Tab onSelectTab={mockCallBack} />);
      expect(mockCallBack.mock.calls.length).toBe(0);
      component.find("button").simulate("click");
      expect(mockCallBack.mock.calls.length).toBe(1);
    });

    it("should use default onSelectTab", () => {
      const result = Tab.defaultProps.onSelectTab();
      expect(result).toBe(undefined);
    });
  });
});

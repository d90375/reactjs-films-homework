import React from "react";
import { shallow } from "enzyme";
import Tab from "../Tab";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: "/film/531499",
    search: "?filter=mockchild",
    hash: "",
    state: null,
    key: "oe8zjc"
  })
}));

describe("Tab", () => {
  let component;

  const mockCallBack = jest.fn();

  it("should render TopSort component without props, with fakeChild", () => {
    component = shallow(<Tab onSelectTab={mockCallBack}>fakeMockChild</Tab>);
    expect(component).toMatchSnapshot();
  });

  it("should render TopSort component with route, should changed className", () => {
    component = shallow(<Tab onSelectTab={mockCallBack}>mockChild</Tab>);
    expect(component).toMatchSnapshot();
  });

  describe("handlers", () => {
    it("should call onSelectTab method", () => {
      component = shallow(<Tab onSelectTab={mockCallBack}>mockChild</Tab>);
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

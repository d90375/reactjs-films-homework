import React from "react";
import TopSort from "../TopSort";

describe("TopSort", () => {
  let component;

  const mockCallBack = jest.fn();
  const event = { target: { value: "value" } };

  it("should render TopSort component without props", () => {
    component = shallow(<TopSort onSelectChange={mockCallBack} />);
    expect(component).toMatchSnapshot();
  });

  it("should render TopSort component with props", () => {
    component = shallow(<TopSort genres={{ genres: "genres", genres2: "genres2" }} onSelectChange={mockCallBack} />);
    expect(component).toMatchSnapshot();
  });

  describe("handlers", () => {
    it("should call onSelectChange method", () => {
      component = shallow(<TopSort onSelectChange={mockCallBack} />);
      component.find("select").simulate("change", event);
      expect(mockCallBack).toBeCalledWith(event);
    });
  });
});

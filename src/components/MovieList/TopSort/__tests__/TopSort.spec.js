import React from "react";
import { shallow } from "enzyme";
import TopSort from "../TopSort";
import { GENRE_ID } from "../../../../constants";

describe("TopSort", () => {
  let component;

  const mockCallBacks = {
    onSelectChange: jest.fn(),
    handleSelectTab: jest.fn()
  };
  const event = { target: { value: "value" } };
  const mockProps = {
    TABS_INFO: ["selected"],
    selectedTab: GENRE_ID
  };

  it("should render TopSort component without props", () => {
    component = shallow(<TopSort {...mockCallBacks} />);
    expect(component).toMatchSnapshot();
  });

  it("should render TopSort component with props", () => {
    component = shallow(<TopSort genres={{ genres: "genres", genres2: "genres2" }} {...mockCallBacks} />);
    expect(component).toMatchSnapshot();
  });

  it("should render TopSort component with props, should change className", () => {
    component = shallow(
      <TopSort genres={{ genres: "genres", genres2: "genres2" }} {...mockProps} {...mockCallBacks} />
    );
    expect(component).toMatchSnapshot();
  });

  describe("handlers", () => {
    it("should call onSelectChange method", () => {
      component = shallow(<TopSort {...mockCallBacks} />);
      component.find("select").simulate("change", event);
      expect(mockCallBacks.onSelectChange).toBeCalledWith(event);
    });
  });
});

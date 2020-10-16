import React from "react";
import { shallow } from "enzyme";
import TopSort from "../TopSort";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: "/film/531499",
    search: "?genreId=999999",
    hash: "",
    state: null,
    key: "oe8zjc"
  })
}));

describe("TopSort", () => {
  let component;

  const mockCallBacks = {
    onSelectChange: jest.fn(),
    handleSelectTab: jest.fn()
  };

  const event = { target: { value: "value" } };

  it("should render TopSort component without props", () => {
    component = shallow(<TopSort {...mockCallBacks} />);
    expect(component).toMatchSnapshot();
  });

  it("should render TopSort component with route query, should change className", () => {
    component = shallow(
      <TopSort genres={{ genres: "genres", genres2: "genres2" }} TABS_INFO={["mockTab"]} {...mockCallBacks} />
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

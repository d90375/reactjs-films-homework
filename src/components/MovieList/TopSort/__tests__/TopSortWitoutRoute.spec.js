import React from "react";
import { shallow } from "enzyme";
import TopSort from "../TopSort";

jest.mock("react-router-dom", () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: "",
    search: "",
    hash: "",
    state: null,
    key: ""
  })
}));

describe("TopSort with free route, equal '' ", () => {
  let component;

  const mockCallBacks = {
    onSelectChange: jest.fn(),
    handleSelectTab: jest.fn()
  };

  it("should render TopSort component without route, query is equal '' ", () => {
    component = shallow(<TopSort genres={{ genres: "genres", genres2: "genres2" }} {...mockCallBacks} />);
    expect(component).toMatchSnapshot();
  });
});

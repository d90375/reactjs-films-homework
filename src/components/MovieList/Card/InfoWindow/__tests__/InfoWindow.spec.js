import React from "react";
import { shallow } from "enzyme";
import InfoWindow from "../InfoWindow";

describe("InfoWindow", () => {
  let component;

  const mockProps = {
    cardItem: {
      genres: "genres",
      score: 999,
      title: "title",
      posterImg: "posterImg",
      overview: "overview",
      id: 9
    }
  };

  const mockCallBack = jest.fn();

  it("should render InfoWindow component without props", () => {
    component = shallow(<InfoWindow onShowInfo={mockCallBack} />);
    expect(component).toMatchSnapshot();
  });

  it("should render InfoWindow component with props", () => {
    component = shallow(<InfoWindow onShowInfo={mockCallBack} {...mockProps} />);
    expect(component).toMatchSnapshot();
  });

  describe("should handler", () => {
    it("should call onShowInfo method", () => {
      component = shallow(<InfoWindow onShowInfo={mockCallBack} />);
      expect(mockCallBack.mock.calls.length).toBe(0);
      component.find("[data-id='info-window-btn']").simulate("click");
      expect(mockCallBack.mock.calls.length).toBe(1);
    });
  });
});

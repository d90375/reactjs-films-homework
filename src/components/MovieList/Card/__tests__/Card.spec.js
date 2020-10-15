import React from "react";
import { shallow } from "enzyme";
import Card from "../Card";

describe("Card", () => {
  let component;

  const mockProps = {
    cardIndex: 9,
    genres: "genres",
    isInfoShow: true,
    isDisplayCardDirection: "line"
  };

  const mockCallBacks = {
    onChangeHeaderMovie: jest.fn(),
    handleShowTrailer: jest.fn(),
    handleShowInfo: jest.fn()
  };

  it("should render Card component without props", () => {
    component = shallow(<Card {...mockCallBacks} />);
    expect(component).toMatchSnapshot();
  });

  it("should render Card component with props", () => {
    component = shallow(
      <Card
        {...mockProps}
        cardItem={{ poster_path: "posterImg", title: "title", overview: "overview", vote_average: 9, id: 9 }}
        {...mockCallBacks}
      />
    );
    expect(component).toMatchSnapshot();
  });

  describe("should handler", () => {
    it("should call onChangeHeaderMovie method ", () => {
      component = shallow(<Card {...mockCallBacks} />);
      expect(mockCallBacks.onChangeHeaderMovie.mock.calls.length).toBe(0);
      component.find(".card__description").simulate("click");
      expect(mockCallBacks.onChangeHeaderMovie.mock.calls.length).toBe(1);
    });
  });
});

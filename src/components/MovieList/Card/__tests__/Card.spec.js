import React from "react";
import Card from "../Card";

const setUp = (props) => {
  return shallow(<Card {...props} />);
};

describe("Card component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  const mockProps = {
    posterImg: "posterImg",
    title: "title",
    genres: "genres",
    overview: "overview",
    score: 0,
    id: 0,
    cardIndex: 0,
    isResizedImg: true,
    isHiddenWindow: true,
    isInfoShow: true
  };

  it("should render Card component without props", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render Card component with props", () => {
    expect(component).toMatchSnapshot({ ...mockProps });
  });

  describe("defaultProps", () => {
    it("should use default onShowWindow", () => {
      const result = Card.defaultProps.onShowWindow();
      expect(result).toBe(undefined);
    });

    it("should use default onHideWindow", () => {
      const result = Card.defaultProps.onHideWindow();
      expect(result).toBe(undefined);
    });

    it("should use default onChangeHeaderMovie", () => {
      const result = Card.defaultProps.onChangeHeaderMovie();
      expect(result).toBe(undefined);
    });
    it("should use default onResizeImg", () => {
      const result = Card.defaultProps.onResizeImg();
      expect(result).toBe(undefined);
    });
    it("should use default onOriginImg", () => {
      const result = Card.defaultProps.onOriginImg();
      expect(result).toBe(undefined);
    });

    it("should use default handleShowTrailer", () => {
      const result = Card.defaultProps.handleShowTrailer();
      expect(result).toBe(undefined);
    });
    it("should use default handleShowInfo", () => {
      const result = Card.defaultProps.handleShowInfo();
      expect(result).toBe(undefined);
    });
  });
});

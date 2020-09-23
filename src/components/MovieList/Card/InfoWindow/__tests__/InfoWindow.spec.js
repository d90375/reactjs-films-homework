import React from "react";
import InfoWindow from "../InfoWindow";

const setUp = (props) => {
  return shallow(<InfoWindow {...props} />);
};

describe("InfoWindow component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  const mockProps = {
    cardData: {
      genres: "genres",
      score: 999,
      title: "title",
      posterImg: "posterImg",
      overview: "overview",
      id: 9
    }
  };

  it("should render InfoWindow component without props", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render InfoWindow component with props", () => {
    component = setUp({ ...mockProps });
    expect(component).toMatchSnapshot();
  });

  describe("defaultProps", () => {
    it("should use default onShowInfo", () => {
      const result = InfoWindow.defaultProps.onShowInfo();
      expect(result).toBe(undefined);
    });
  });
});

import React from "react";
import { shallow } from "enzyme";
import SearchIconSvg from "../SearchIconSVG";

describe("Search Icon SVG", () => {
  let component;

  const mockOnClickQuery = jest.fn();

  it("should handle of click search", () => {
    component = shallow(<SearchIconSvg onClickQuery={mockOnClickQuery} />);
    expect(mockOnClickQuery.mock.calls.length).toBe(0);
    component.find(".search__icon").simulate("click");
    expect(mockOnClickQuery.mock.calls.length).toBe(1);
  });
});

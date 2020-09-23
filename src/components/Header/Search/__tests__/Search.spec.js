import React from "react";
import Search from "../Search";

describe("Search component", () => {
  let component;

  const setUp = (props) => {
    return shallow(<Search {...props} />);
  };

  beforeEach(() => {
    component = setUp();
  });

  it("should render Search component without props", () => {
    expect(component).toMatchSnapshot();
  });

  it("should render Search component with props", () => {
    component = setUp({ queryText: "queryText" });
    expect(component).toMatchSnapshot();
  });

  describe("should calls handlers", () => {
    const mockOnQueryChanged = jest.fn();
    const mockOnKeyQuery = jest.fn();
    const mockOnClickQuery = jest.fn();

    beforeEach(() => {
      component = setUp({
        onQueryChanged: mockOnQueryChanged,
        onKeyQuery: mockOnKeyQuery,
        onClickQuery: mockOnClickQuery
      });
    });

    it("should handle input text", () => {
      expect(mockOnKeyQuery).not.toBeCalled();
      const mockEvent = {
        target: { value: "value" }
      };
      component.find("input").simulate("change", mockEvent);
      expect(mockOnQueryChanged).toHaveBeenCalledWith(mockEvent);
    });

    it("should handle of search by keypress enter", () => {
      expect(mockOnKeyQuery).not.toBeCalled();
      component.find(".search__text").simulate("keydown", { key: "Enter" });
      expect(mockOnKeyQuery).toHaveBeenCalledWith({ key: "Enter" });
      expect(mockOnKeyQuery.mock.calls.length).toBe(1);
    });

    it("should handle of click search", () => {
      expect(mockOnClickQuery.mock.calls.length).toBe(0);
      component.find(".search__icon").simulate("click");
      expect(mockOnClickQuery.mock.calls.length).toBe(1);
    });
  });
});

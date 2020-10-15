import React from "react";
import { shallow } from "enzyme";
import Search from "../Search";

describe("Search", () => {
  let component;

  const mockOnQueryChanged = jest.fn();
  const mockOnKeyQuery = jest.fn();
  const mockOnClickQuery = jest.fn();

  it("should render Search component without props", () => {
    component = shallow(
      <Search onKeyQuery={mockOnKeyQuery} onClickQuery={mockOnClickQuery} onQueryChanged={mockOnQueryChanged} />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render Search component with props = (valueText="valueText")', () => {
    component = shallow(
      <Search
        onKeyQuery={mockOnKeyQuery}
        onClickQuery={mockOnClickQuery}
        onQueryChanged={mockOnQueryChanged}
        valueText="valueText"
      />
    );
    expect(component).toMatchSnapshot();
  });

  describe("should calls handlers", () => {
    it("should handle input text", () => {
      component = shallow(
        <Search onKeyQuery={mockOnKeyQuery} onClickQuery={mockOnClickQuery} onQueryChanged={mockOnQueryChanged} />
      );
      expect(mockOnKeyQuery).not.toBeCalled();
      const mockEvent = {
        target: { value: "value" }
      };
      component.find("input").simulate("change", mockEvent);
      expect(mockOnQueryChanged).toHaveBeenCalledWith(mockEvent);
    });

    it("should handle of search by keypress enter", () => {
      component = shallow(
        <Search onKeyQuery={mockOnKeyQuery} onClickQuery={mockOnClickQuery} onQueryChanged={mockOnQueryChanged} />
      );
      const mockEvent = {
        preventDefault: () => {}
      };
      expect(mockOnKeyQuery).not.toBeCalled();
      expect(mockOnKeyQuery.mock.calls.length).toBe(0);
      component.find(".search").simulate("submit", mockEvent);
      expect(mockOnKeyQuery.mock.calls.length).toBe(1);
    });
  });
});

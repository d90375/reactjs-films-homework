import React from "react";
import ButtonWatchNow from "../ButtonWatchNow";

describe("ButtonWatchNow", () => {
  let component;

  const mockFunction = jest.fn();

  it("should render ButtonWatchNow component with props", () => {
    component = shallow(<ButtonWatchNow handleShowTrailer={mockFunction} />);
    expect(component).toMatchSnapshot();
  });

  it("should handle show trailer", () => {
    expect(mockFunction.mock.calls.length).toBe(0);
    component.find(".btn__watch").simulate("click");
    expect(mockFunction.mock.calls.length).toBe(1);
  });
});

import TrailerReducer from "../TrailerReducer";

import {
  FETCH_TRAILER_FULFILLED,
  FETCH_TRAILER_PENDING,
  FETCH_TRAILER_REJECTED,
  FETCH_TRAILER_REMOVE
} from "../../actionTypes";

describe("modules > trailer > TrailerReducer", () => {
  it("returns initial state, if non matched action is dispatched", () => {
    const initialState = {
      trailer: {
        isLoadingTrailer: false,
        isFulfilledTrailer: false,
        hasErrorTrailer: false
      }
    };

    const action = {
      type: "FOO"
    };

    expect(TrailerReducer(initialState, action)).toBe(initialState);
  });

  it.each([[FETCH_TRAILER_FULFILLED], [FETCH_TRAILER_PENDING], [FETCH_TRAILER_REJECTED], [FETCH_TRAILER_REMOVE]])(
    `updates state according to dispatched action`,
    (actionType) => {
      const initialState = {
        value: 0
      };

      const payload =
        actionType === FETCH_TRAILER_FULFILLED
          ? {
              data: 1
            }
          : undefined;

      const action = {
        type: actionType,
        payload
      };

      expect(TrailerReducer(initialState, action)).toMatchSnapshot();
    }
  );
});

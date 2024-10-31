import { INCREMENT, RESET } from "../actions/actionTypes";
const initialSate = {
  count: 0.0,
};
export const countReducer = (state = initialSate, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,

        count: Number(state.count) + Number(action.payload),
      };
    case RESET:
      return {
        count: 0.0,
      };

    default:
      return state;
  }
};

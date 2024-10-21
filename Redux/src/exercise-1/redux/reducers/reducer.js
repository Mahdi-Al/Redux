import { INCREMENT, DECREMENT, RESET } from "../actions/actionTypes";
const initialSate = {
  count: 0,
};
export const countReducer = (state = initialSate, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: state.count - state.count,
      };

    default:
      return state;
  }
};

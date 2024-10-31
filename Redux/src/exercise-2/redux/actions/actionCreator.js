import { INCREMENT, RESET } from "./actionTypes";
export const add = (price) => {
  return {
    type: INCREMENT,
    payload: price,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

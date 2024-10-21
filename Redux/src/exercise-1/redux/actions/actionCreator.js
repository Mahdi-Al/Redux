import { INCREMENT, DECREMENT, RESET } from "./actionTypes";
export const add = () => {
  return {
    typeof: INCREMENT,
  };
};
export const mines = () => {
  return {
    typeof: DECREMENT,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};

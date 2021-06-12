import { useReducer } from "react";

const internalReducer = ({ count }, { type, payload }) => {
  switch (type) {
    case "Increment": {
      return {
        count: Math.min(count + 1, payload.max),
      };
    }
    case "Decrement": {
      return {
        count: Math.max(0, count - 1),
      };
    }
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

function useCounter({ initValue = 0, max }, reducer = internalReducer) {
  const [{ count }, dispatch] = useReducer(reducer, { count: initValue });

  const handleIncrement = () => {
    dispatch({ type: "Increment", payload: { max } });
  };
  const handleDecrement = () => {
    dispatch({ type: "Decrement" });
  };

  return {
    count,
    handleIncrement,
    handleDecrement,
  };
}
useCounter.reducer = internalReducer;
useCounter.types = {
  increment: "Increment",
  decrement: "Decrement",
};
export default useCounter;

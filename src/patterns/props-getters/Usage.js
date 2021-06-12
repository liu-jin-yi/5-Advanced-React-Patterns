import React from "react";
import Counter from "./Counter";
import useCounter from "./useCounter";

const Usage = () => {
  const { getCountProps, getDecrementProps, getIncrementProps } = useCounter({
    initValue: 0,
    max: 20,
  });

  const handleClickIncrement = () => {
    console.log("handleIncrement -> Props Getters 模式");
  };
  const handleClickDecrement = () => {
    console.log("handleIncrement -> Props Getters 模式");
  };

  return (
    <div>
      <h1>Props Getters 模式 用例四</h1>
      <Counter {...getCountProps()}>
        {/* <Counter.Increment
          {...getIncrementProps({
            onClick: handleClickIncrement,
            iconProps: { spin: true },
          })}
        /> */}
        <Counter.Increment
          {...getIncrementProps({
            onClick: handleClickIncrement,
          })}
        />
        <Counter.Count max={10} />
        <Counter.Decrement
          {...getDecrementProps({ onClick: handleClickDecrement })}
        />
      </Counter>
    </div>
  );
};

export default Usage;

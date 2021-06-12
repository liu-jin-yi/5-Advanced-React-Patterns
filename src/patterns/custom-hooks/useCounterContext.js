import React from "react";

const CounterContext = React.createContext(undefined);

function CounterProvider({ value, children }) {
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

function useCounterContext() {
  const context = React.useContext(CounterContext);
  if (!context) {
    throw new Error("context必须在Provider中使用！！");
  }
  return context;
}

export { CounterProvider, useCounterContext };

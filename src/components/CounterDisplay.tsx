"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const CounterDisplay = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h1>Counter Value: </h1>
      <div className="counter-value">{count}</div>
    </div>
  );
};

export default CounterDisplay;

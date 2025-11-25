import { count } from "console";
import { createContext, ReactNode, useContext, useState } from "react";

interface CounterContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}
export const CounterContext = createContext<CounterContextProps | undefined>(
  undefined
);

export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => (count > 0 ? count - 1 : 0));
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCount must be used within a Count Provider");
  }

  return context;
};

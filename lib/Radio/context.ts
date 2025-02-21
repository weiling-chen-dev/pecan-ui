import { ChangeEvent, createContext } from "react";

type RadioGroupContext = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioGroupContext = createContext<RadioGroupContext | null>(null);

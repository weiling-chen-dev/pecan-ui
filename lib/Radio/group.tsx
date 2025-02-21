/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from "react";
import { RadioGroupContext } from "./context";
import { Radio } from "pecan-ui";

type RadioGroupProps = {
  value?: any;
  children?: ReactNode;
  options?: Array<{ value: any; label: ReactNode }>;
};

const RadioGroup = (props: RadioGroupProps) => {
  const { value, children, options } = props;

  const [innerValue, setInnerValue] = useState(value);

  let renderChildren = null;
  if (options && options.length > 0) {
    renderChildren = options.map(({ value, label }, i) => {
      return (
        <Radio
          key={i}
          value={value}
          checked={String(value) === String(innerValue)}
        >
          {label}
        </Radio>
      );
    });
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value);
  };

  return (
    <RadioGroupContext.Provider
      value={{ value: innerValue, onChange: handleChange }}
    >
      {renderChildren ?? children}
    </RadioGroupContext.Provider>
  );
};

export default RadioGroup;

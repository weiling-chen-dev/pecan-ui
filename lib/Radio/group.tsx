/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, useState } from "react";
import { RadioButtonContext, RadioGroupContext } from "./context";
import { Radio } from "pecan-ui";
import { RadioButton } from "./RadioButton";

type RadioGroupProps = {
  value?: any;
  children?: ReactNode;
  options?: Array<{ value: any; label: ReactNode; disabled?: boolean }>;
  optionType?: "default" | "button";
  buttonStyle?: "outline" | "solid";
};

const RadioGroup = (props: RadioGroupProps) => {
  const {
    value,
    children,
    options,
    buttonStyle = "outline",
    optionType = "default",
  } = props;

  const [innerValue, setInnerValue] = useState(value);

  let renderChildren = null;
  if (options && options.length > 0) {
    if (optionType === "default") {
      renderChildren = options.map(({ value, label, disabled }, i) => {
        return (
          <Radio
            key={i}
            value={value}
            disabled={disabled}
            checked={String(value) === String(innerValue)}
          >
            {label}
          </Radio>
        );
      });
    } else {
      // radio button
      renderChildren = (
        <div className="flex">
          {options.map(({ value, label, disabled }, i) => {
            const isFirst = i === 0;
            const isLast = i === options.length - 1;
            return (
              <RadioButtonContext.Provider
                value={{ isFirst, isLast, buttonStyle }}
              >
                <RadioButton
                  key={i}
                  value={value}
                  disabled={disabled}
                  checked={String(value) === String(innerValue)}
                >
                  {label}
                </RadioButton>
              </RadioButtonContext.Provider>
            );
          })}
        </div>
      );
    }
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

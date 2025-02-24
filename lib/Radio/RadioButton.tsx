import { useContext, useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { WaveContainer } from "../Wave";
import { RadioButtonContext, RadioGroupContext } from "./context";

type RadioProps = {
  name?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  children: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
};

export const RadioButton = (props: RadioProps) => {
  const {
    name,
    value,
    checked = false,
    defaultChecked = false,
    children,
    disabled = false,
  } = props;

  const { onChange: onGroupChange } = useContext(RadioGroupContext) ?? {};
  const { isFirst, isLast, buttonStyle } = useContext(RadioButtonContext) ?? {};

  const outerChecked = checked || defaultChecked;
  const [innerChecked, setInnerChecked] = useState(outerChecked);
  const mergedChecked = onGroupChange ? outerChecked : innerChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (!onGroupChange) {
      setInnerChecked(e.target.checked);
    } else {
      onGroupChange(e);
    }
  };

  return (
    <WaveContainer
      disabled={disabled}
      className={mergedChecked ? "z-1" : "z-0"}
    >
      <label
        id="radio-button"
        className={twMerge(
          "transition-all",
          "duration-300",
          "ease-out",
          "radio-button-label",
          "relative",
          [isFirst && "rounded-l-md border-l-1"],
          [isLast && "rounded-r-md border-r-1"],
          "box-border",
          "border-t-1",
          "border-b-1",
          "border-r-1",
          "px-[15px]",
          "py-[5px]",
          " border-gray-300",
          "group",
          "cursor-pointer",
          "items-center",
          "bg-white",
          mergedChecked && [
            !isFirst && "default-button-radio-checked",
            "border-primary-500 hover:border-primary-400",
            buttonStyle === "solid" &&
              "bg-primary-500  hover:bg-primary-400 hover:border-primary-400",
          ],
          disabled && ["pointer-events-none", "bg-gray-100"]
        )}
      >
        <input
          name={name}
          value={value}
          disabled={disabled}
          checked={mergedChecked}
          type="checkbox"
          className="absolute opacity-0 h-0 w-0 cursor-pointer"
          onChange={handleChange}
        ></input>
        <span
          className={twJoin(
            disabled && "text-gray-300",
            mergedChecked
              ? buttonStyle === "solid"
                ? "text-white"
                : "text-primary-500"
              : "text-black",
            "group-hover:text-primary-500",
            buttonStyle === "solid" && mergedChecked && "group-hover:text-white"
          )}
        >
          {children}
        </span>
      </label>
    </WaveContainer>
  );
};

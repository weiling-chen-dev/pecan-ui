import { useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { WaveContainer } from "../Wave";

type CheckboxProps = {
  children: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
};

export const Checkbox = (props: CheckboxProps) => {
  const {
    checked = false,
    defaultChecked = false,
    children,
    disabled = false,
  } = props;

  //   const { onChange: onGroupChange } = useContext(CheckboxGroupContext) ?? {};

  const outerChecked = checked || defaultChecked;
  const [innerChecked, setInnerChecked] = useState(outerChecked);
  //   const mergedChecked = onGroupChange ? outerChecked : innerChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    setInnerChecked(e.target.checked);

    // if (!onGroupChange) {
    //   setInnerChecked(e.target.checked);
    // } else {
    //   onGroupChange(e);
    // }
  };

  return (
    <WaveContainer disabled={disabled}>
      <label
        id="checkbox"
        className={twMerge(
          "group",
          "cursor-pointer",
          "space-x-2",
          "flex",
          "items-center",
          disabled && "pointer-events-none"
        )}
      >
        <input
          disabled={disabled}
          checked={innerChecked}
          type="checkbox"
          className="absolute opacity-0 h-0 w-0 cursor-pointer"
          onChange={handleChange}
        ></input>
        <span
          id="checkbox-check-box"
          className={twMerge(
            "relative",
            "cursor-pointer",
            "align-middle",
            "bg-white",
            "w-[16px]",
            "h-[16px]",
            "inline-block",
            "border-gray-300",
            "border-[1px]",
            "rounded-sm",
            innerChecked
              ? [
                  "check-box-inner",
                  "bg-primary-500",
                  "border-primary-500",
                  "group-hover:bg-primary-400",
                ]
              : ["border-gray-300", "border-[1px]"],
            "group-hover:border-primary-400",
            "hover:border-primary-400",
            "transition-all",
            "duration-200",
            "ease-out",
            disabled &&
              (innerChecked
                ? [
                    "check-box-disabled-checked",
                    "border-gray-200",
                    "bg-gray-100",
                    "pointer-events-none",
                    "hover:border-gray-300",
                    "group-hover:border-gray-300",
                  ]
                : [
                    "bg-gray-100",
                    "pointer-events-none",
                    "border-gray-200",
                    "hover:border-gray-200",
                    "group-hover:border-gray-200",
                  ])
          )}
        />
        <span className={twJoin(disabled && "text-gray-300")}>{children}</span>
      </label>
    </WaveContainer>
  );
};

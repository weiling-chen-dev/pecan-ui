import { useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { WaveContainer } from "../Wave";

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

export const Radio = (props: RadioProps) => {
  const {
    name,
    value,
    checked = false,
    defaultChecked = false,
    children,
    disabled = false,
  } = props;

  const [rawChecked, setRawChecked] = useState(checked || defaultChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (!("checked" in props)) {
      setRawChecked(e.target.checked);
    }
  };
  return (
    <WaveContainer type="Radio" disabled={disabled}>
      <label
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
          name={name}
          value={value}
          disabled={disabled}
          checked={rawChecked}
          type="checkbox"
          className="absolute opacity-0 h-0 w-0 cursor-pointer"
          onChange={handleChange}
        ></input>
        <span
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
            "rounded-[50%]",
            rawChecked
              ? ["box-checked", "bg-primary-500", "border-primary-500"]
              : ["border-gray-300", "border-[1px]"],
            "group-hover:border-primary-500",
            "hover:border-primary-500",
            "transition-all",
            "duration-200",
            "ease-out",
            disabled &&
              (rawChecked
                ? [
                    "disabled-checked",
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

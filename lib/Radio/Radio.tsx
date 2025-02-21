import { useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { WaveContainer } from "../Wave";

type RadioProps = {
  children: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
};

export const Radio = (props: RadioProps) => {
  const { checked, defaultChecked = false, children, disabled = false } = props;

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
                    "bg-gray-300",
                    "border-gray-300",
                    "pointer-events-none",
                    "hover:border-gray-300",
                    "group-hover:border-gray-300",
                  ]
                : [
                    "pointer-events-none",
                    "hover:border-gray-300",
                    "group-hover:border-gray-300",
                  ])
          )}
        />
        <span className={twJoin(disabled && "text-gray-300")}>{children}</span>
      </label>
    </WaveContainer>
  );
};

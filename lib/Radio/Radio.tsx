import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { WaveContainer } from "../Wave";

type RadioProps = {
  children: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: () => void;
};

export const Radio = (props: RadioProps) => {
  const { checked, defaultChecked = false, children } = props;

  const [rawChecked, setRawChecked] = useState(checked || defaultChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!("checked" in props)) {
      setRawChecked(e.target.checked);
    }
  };
  return (
    <WaveContainer type="Radio">
      <label className="group cursor-pointer space-x-2 flex items-center">
        <input
          checked={checked || rawChecked}
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
            "hover:border-primary-500",
            "transition-all",
            "duration-200",
            "ease-out"
          )}
        />
        <span className="">{children}</span>
      </label>
    </WaveContainer>
  );
};

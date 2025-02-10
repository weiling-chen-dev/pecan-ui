import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
type ButtonProps = { children: ReactNode; className: string };

export const Button = ({ children, className }: ButtonProps): ReactNode => {
  const mergedCNs = twMerge(
    "p-[1px]",
    "bg-blue-300",
    "cursor-pointer",
    className
  );
  return (
    <button className={mergedCNs} type="button">
      {children}
    </button>
  );
};

import { ReactNode } from "react";
type ButtonProps = { children: ReactNode };

export const Button = ({ children }: ButtonProps): ReactNode => {
  return (
    <button className="bg-amber-400 cursor-pointer" type="button">
      {children}
    </button>
  );
};

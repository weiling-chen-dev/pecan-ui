import { ReactNode } from "react";
import { twJoin, twMerge } from "tailwind-merge";

type PresetColors =
  | "amber"
  | "lime"
  | "emerald"
  | "green"
  | "teal"
  | "cyan"
  | "sky"
  | "gray";

type Colors = "default" | "primary" | "secondary" | "danger" | PresetColors;

type Variants = "outlined" | "dashed" | "solid" | "filled" | "text" | "link";
type Types = "primary" | "dashed" | "link" | "text" | "default";

type ButtonProps = {
  type?: Types;
  color?: Colors;
  variant?: Variants;
  children: ReactNode;
  ghost?: boolean;
  danger?: boolean;
  className?: string;
};

const resolveTailwindBgColor = (color?: Colors, variant?: Variants) => {
  if (!color || !variant) return "";
  if (variant === "solid") {
    return {
      default: "bg-primary-500 hover:bg-primary-400",
      primary: "bg-primary-500 hover:bg-primary-400",
      secondary: "bg-secondary-500 hover:bg-secondary-400",
      danger: "bg-danger-500 hover:bg-danger-400",
      amber: "bg-amber-500 hover:bg-amber-400",
      cyan: "bg-cyan-500 hover:bg-cyan-400",
      emerald: "bg-emerald-500 hover:bg-emerald-400",
      green: "bg-green-500 hover:bg-green-400",
      teal: "bg-teal-500 hover:bg-teal-400",
      sky: "bg-sky-500 hover:bg-sky-400",
      gray: "bg-gray-500 hover:bg-gray-400",
      lime: "bg-lime-500 hover:bg-lime-400",
    }[color];
  }
  if (variant === "filled") {
    return {
      default: "bg-default-light hover:bg-default-shadow",
      primary: "bg-primary-100 hover:bg-primary-200",
      secondary: "bg-secondary-100 hover:bg-secondary-200",
      danger: "bg-danger-100 hover:bg-danger-200",
      amber: "bg-amber-100 hover:bg-amber-200",
      cyan: "bg-cyan-100 hover:bg-cyan-200",
      emerald: "bg-emerald-100 hover:bg-emerald-200",
      green: "bg-green-100 hover:bg-green-200",
      teal: "bg-teal-100 hover:bg-teal-200",
      sky: "bg-sky-100 hover:bg-sky-200",
      gray: "bg-gray-100 hover:bg-gray-200",
      lime: "bg-lime-100 hover:bg-lime-200",
    }[color];
  }

  if (variant === "dashed" || variant === "outlined") {
    return "bg-white hover:bg-white";
  }

  if (variant === "text") {
    return {
      default: "bg-transparent hover:bg-default-shadow",
      primary: "bg-transparent hover:bg-primary-100",
      secondary: "bg-transparent hover:bg-secondary-100",
      danger: "bg-transparent hover:bg-danger-100",
      amber: "bg-transparent hover:bg-amber-100",
      cyan: "bg-transparent hover:bg-cyan-100",
      emerald: "bg-transparent hover:bg-emerald-100",
      green: "bg-transparent hover:bg-green-100",
      teal: "bg-transparent hover:bg-teal-100",
      sky: "bg-transparent hover:bg-sky-100",
      gray: "bg-transparent hover:bg-gray-100",
      lime: "bg-transparent hover:bg-lime-100",
    }[color];
  }
  // variant===link
  return "bg-transparent hover:bg-transparent";
};

const resolveTailwindBorder = (color?: Colors, variant?: Variants): string => {
  if (!color || !variant) return "";

  const borderColor = {
    default: "border-default-light hover:border-primary-500",
    primary: "border-primary-500 hover:border-primary-400",
    secondary: "border-secondary-500 hover:border-secondary-400",
    danger: "border-danger-500 hover:border-danger-400",
    amber: "border-amber-500 hover:border-amber-400",
    cyan: "border-cyan-500 hover:border-cyan-400",
    emerald: "border-emerald-500 hover:border-emerald-400",
    green: "border-green-500 hover:border-green-400",
    teal: "border-teal-500 hover:border-teal-400",
    sky: "border-sky-500 hover:border-sky-400",
    gray: "border-gray-500 hover:border-gray-400",
    lime: "border-lime-500 hover-border-lime-400",
  }[color];

  switch (variant) {
    case "outlined": {
      const solidBorderBase = "border-1 border-solid";
      return solidBorderBase + " " + borderColor;
    }

    case "solid": {
      const solidBorderBase = "border-1 border-solid";
      return solidBorderBase + " " + borderColor;
    }

    case "dashed": {
      const dashedBorderBase = "border-1 border-dashed";
      return dashedBorderBase + " " + borderColor;
    }
    // no border
    default: {
      return "border-none hover:border-none";
    }
  }
};

const resolveTailwindTextColor = (color?: Colors, variant?: Variants) => {
  if (!color || !variant) return "";

  if (variant === "solid") {
    return "text-white hover:text-white";
  }

  if (variant === "link") {
    if (color === "danger") return "text-danger-500 hover:text-danger-400";
    return "text-primary-500 hover:text-primary-400";
  }

  if (variant === "filled" || variant === "text") {
    return {
      default: "text-default-dark hover:text-default-dark",
      primary: "text-primary-500 hover:text-primary-500",
      secondary: "text-secondary-500 hover:text-secondary-500",
      danger: "text-danger-500 hover:text-danger-500",
      amber: "text-amber-500 hover:text-amber-500",
      cyan: "text-cyan-500 hover:text-cyan-500",
      emerald: "text-emerald-500 hover:text-emerald-500",
      green: "text-green-500 hover:text-green-500",
      teal: "text-teal-500 hover:text-teal-500",
      sky: "text-sky-500 hover:text-sky-500",
      gray: "text-gray-500 hover:text-gray-500",
      lime: "text-lime-500 hover:text-lime-500",
    }[color];
  }
  // dash & outlined
  return {
    default: "text-default-dark hover:text-primary-500",
    primary: "text-primary-500 hover:text-primary-400",
    secondary: "text-secondary-500 hover:text-secondary-400",
    danger: "text-danger-500 hover:text-danger-400",
    amber: "text-amber-500 hover:text-amber-400",
    cyan: "text-cyan-500 hover:text-cyan-400",
    emerald: "text-emerald-500 hover:text-emerald-400",
    green: "text-green-500 hover:text-green-400",
    teal: "text-teal-500 hover:text-teal-400",
    sky: "text-sky-500 hover:text-sky-400",
    gray: "text-gray-500 hover:text-gray-400",
    lime: "text-lime-500 hover:text-lime-400",
  }[color];
};

const genTypes = ({
  type,
  danger,
  ghost,
}: {
  type: Types;
  danger?: boolean;
  ghost?: boolean;
}): string => {
  switch (type) {
    case "primary": {
      const color = danger ? "danger" : "primary";
      const variant = "solid";

      if (ghost) {
        const ghostVariant = "outlined";
        return twJoin(
          resolveTailwindBgColor(color, ghostVariant),
          resolveTailwindTextColor(color, ghostVariant),
          resolveTailwindBorder(color, ghostVariant),
          "bg-transparent hover:bg-transaction"
        );
      }

      return twJoin(
        resolveTailwindBgColor(color, variant),
        resolveTailwindTextColor(color, variant),
        resolveTailwindBorder(color, variant)
      );
    }

    case "dashed": {
      if (ghost) {
        return twJoin(
          danger ? "text-danger-500" : "text-white",
          danger
            ? "border-1 border-dashed border-danger-500"
            : "border-1 border-dashed border-white",
          "bg-transparent hover:bg-transaction"
        );
      }

      const color = danger ? "danger" : "default";
      const variant = "dashed";

      return twJoin(
        resolveTailwindBgColor(color, variant),
        resolveTailwindTextColor(color, variant),
        resolveTailwindBorder(color, variant)
      );
    }

    case "link": {
      const color = danger ? "danger" : "default";
      const variant = "link";
      return twJoin(
        resolveTailwindBgColor(color, variant),
        resolveTailwindTextColor(color, variant),
        resolveTailwindBorder(color, variant)
      );
    }

    case "text": {
      const color = danger ? "danger" : "default";
      const variant = "text";
      return twJoin(
        resolveTailwindBgColor(color, variant),
        resolveTailwindTextColor(color, variant),
        resolveTailwindBorder(color, variant)
      );
    }

    default: {
      if (ghost) {
        return twJoin(
          danger ? "text-danger-500" : "text-white",
          danger
            ? "border-1 border-solid border-danger-500"
            : "border-1 border-solid border-white",
          "bg-transparent"
        );
      }

      const color: Colors = danger ? "danger" : "default";
      const variant: Variants = "outlined";
      return twJoin(
        resolveTailwindBgColor(color, variant),
        resolveTailwindTextColor(color, variant),
        resolveTailwindBorder(color, variant)
      );
    }
  }
};

export const Button = ({
  type = "default",
  color,
  variant,
  danger = false,
  ghost = false,
  className,
  children,
}: ButtonProps): ReactNode => {
  // prioritize the later class
  // color & variant >  danger > ghost > type
  const mergedCNs = twMerge(
    "group",
    "btn",
    "py-[3px]",
    "px-[10px]",
    "text-primary-500",
    "rounded-md",
    genTypes({ type, danger, ghost }),
    resolveTailwindBorder(color, variant),
    resolveTailwindTextColor(color, variant),
    resolveTailwindBgColor(color, variant),
    className
  );

  console.log(mergedCNs);

  return (
    <button className={mergedCNs} type="button">
      {children}
    </button>
  );
};

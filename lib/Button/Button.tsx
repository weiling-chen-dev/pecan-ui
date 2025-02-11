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
      default: "bg-primary-500",
      primary: "bg-primary-500",
      secondary: "bg-secondary-500",
      danger: "bg-danger-500",
      amber: "bg-amber-500",
      cyan: "bg-cyan-500",
      emerald: "bg-emerald-500",
      green: "bg-green-500",
      teal: "bg-teal-500",
      sky: "bg-sky-500",
      gray: "bg-gray-500",
      lime: "bg-lime-500",
    }[color];
  }
  if (variant === "filled") {
    return {
      default: "bg-default-light",
      primary: "bg-primary-100",
      secondary: "bg-secondary-100",
      danger: "bg-danger-100",
      amber: "bg-amber-100",
      cyan: "bg-cyan-100",
      emerald: "bg-emerald-100",
      green: "bg-green-100",
      teal: "bg-teal-100",
      sky: "bg-sky-100",
      gray: "bg-gray-100",
      lime: "bg-lime-100",
    }[color];
  }

  if (variant === "dashed" || variant === "outlined") {
    return "bg-white";
  }
  return "bg-transparent";
};

const resolveTailwindBorder = (color?: Colors, variant?: Variants): string => {
  if (!color || !variant) return "";

  const borderColor = {
    default: "border-default-light",
    primary: "border-primary-500",
    secondary: "border-secondary-500",
    danger: "border-danger-500",
    amber: "border-amber-500 ",
    cyan: "border-cyan-500",
    emerald: "border-emerald-500",
    green: "border-green-500",
    teal: "border-teal-500",
    sky: "border-sky-500",
    gray: "border-gray-500",
    lime: "border-lime-500",
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
      return "border-none";
    }
  }
};

const resolveTailwindTextColor = (color?: Colors, variant?: Variants) => {
  if (!color || !variant) return "";

  if (variant === "solid") {
    return "text-white";
  }

  if (variant === "link") {
    if (color === "danger") return "text-danger-500";
    return "text-primary-500";
  }

  return {
    default: "text-default-dark",
    primary: "text-primary-500",
    secondary: "text-secondary-500",
    danger: "text-danger-500",
    amber: "text-amber-500",
    cyan: "text-cyan-500",
    emerald: "text-emerald-500",
    green: "text-green-500",
    teal: "text-teal-500",
    sky: "text-sky-500",
    gray: "text-gray-500",
    lime: "text-lime-500",
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
          "bg-transparent"
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
          "bg-transparent"
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

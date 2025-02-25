import {
  ReactElement,
  ReactNode,
  useEffect,
  useState,
  cloneElement,
  useRef,
  MutableRefObject,
} from "react";
import { twJoin } from "tailwind-merge";

type WaveElement = HTMLButtonElement | HTMLInputElement | null;

type WaveInfo = {
  rounded: string;
  width: number;
  height: number;
  color: string;
  brightness: number;
};

export const WaveContainer = ({
  disabled,
  children,
  className,
}: {
  disabled?: boolean;
  children: ReactElement;
  className?: string;
}): ReactNode => {
  const [waves, setWaves] = useState<WaveInfo[]>([]);
  const childrenRef: MutableRefObject<WaveElement> = useRef<WaveElement>(null);

  useEffect(() => {
    let id: number | undefined | NodeJS.Timeout = undefined;
    if (waves.length > 0) {
      id = setTimeout(() => {
        setWaves(waves.slice(1));
        clearTimeout(id);
      }, 650);
    }
    return () => clearTimeout(id);
  }, [waves]);

  const addWave = () => {
    if (disabled === true || !childrenRef) return;

    const { height, width, brightness, color, rounded } =
      getWaveStyle(childrenRef.current) ?? {};

    const noWaveEffect =
      !height ||
      !width ||
      !brightness ||
      !color ||
      rounded === undefined ||
      height === 0 ||
      width === 0 ||
      brightness === 0 ||
      color === "none";

    if (noWaveEffect) return;

    setWaves([
      ...waves,
      { height, width, brightness, color, rounded: rounded ?? "" },
    ]);
  };

  return (
    <span onMouseDown={addWave} className={twJoin("flex", className)}>
      {waves.map(({ width, height, color, brightness, rounded }, i) => (
        <Wave
          rounded={rounded}
          width={width}
          height={height}
          color={color}
          brightness={brightness}
          key={i}
        ></Wave>
      ))}
      {cloneElement(children, {
        ref: (ref: WaveElement) => {
          childrenRef.current = ref;
        },
      })}
    </span>
  );
};

export const Wave = ({
  width,
  height,
  color,
  brightness,
  rounded,
}: WaveInfo) => {
  return (
    <span
      className={`animate-click-wave ${rounded}`}
      style={{
        alignSelf: "center",
        position: "absolute",
        width: width,
        height: height,
        boxShadow: `0 0 0 5px currentcolor`,
        color: `var(--color-${color}-${brightness})`,
        opacity: 0,
        pointerEvents: "none",
      }}
    ></span>
  );
};

const getHoverBorderColor = (
  twClassString: string | undefined
): { color: string; brightness: number } => {
  if (!twClassString) return { color: "none", brightness: 0 };

  const fullBorder = twClassString
    .split(" ")
    .filter((tw) => tw.includes("border") && !tw.includes("hover:"))
    .pop();

  const fullHoverBorder = twClassString
    .split(" ")
    .filter((tw) => tw.includes("hover:border"))
    .pop();

  const hoverColor = fullHoverBorder?.split("-")[1];

  const color = fullBorder?.split("-")[1];

  const colorBrightness = Number(fullBorder?.split("-")[2]);

  if (color !== hoverColor) {
    return { color: hoverColor ?? "none", brightness: 500 };
  }
  return { color: color ?? "none", brightness: colorBrightness ?? 0 };
};

const getRounded = (twClassString: string | undefined) => {
  if (!twClassString) return { rounded: "" };
  return {
    rounded: twClassString
      .split(" ")
      .filter((tw) => tw.includes("rounded"))
      .toString(),
  };
};

const getWaveStyle = (node: WaveElement) => {
  if (!node) return null;

  let waveContainer;

  if (node.id === "button" || node.id === "radio-button") {
    waveContainer = node;
  }
  if (node.id === "radio") {
    const nodeArray = Array.from(node.childNodes) as Array<HTMLElement>;

    waveContainer = nodeArray
      .filter((children) => children?.id === "radio-check-box")
      .pop() as HTMLSpanElement;
  }

  const { width, height } = waveContainer?.getBoundingClientRect() ?? {
    width: 0,
    height: 0,
  };

  const { color, brightness } = getHoverBorderColor(waveContainer?.className);

  const { rounded } = getRounded(waveContainer?.className);

  const waveColor = node.id === "radio-button" ? "primary" : color;

  return { width, height, color: waveColor, rounded, brightness };
};

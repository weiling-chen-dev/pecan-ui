import {
  ReactElement,
  ReactNode,
  useEffect,
  useState,
  cloneElement,
  useRef,
  MutableRefObject,
} from "react";

type WaveElement = HTMLButtonElement | HTMLInputElement | null;

type WaveInfo = {
  rounded: string;
  width: number;
  height: number;
  color: string;
  brightness: number;
};

export const WaveContainer = ({
  type,
  children,
}: {
  type: "Button" | "Radio";
  children: ReactElement;
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

  const addWave = (e: React.MouseEvent) => {
    if (childrenRef) {
      if (type === "Button") {
        const container = (
          e?.target as HTMLInputElement
        )?.getBoundingClientRect();

        const { color, brightness } = getHoverBorderColor(
          children?.props?.className
        );

        const { rounded } = getRounded(children?.props?.className);

        const width = container?.width;
        const height = container?.height;

        if (
          width &&
          height &&
          color &&
          brightness &&
          color !== "none" &&
          brightness !== 0 &&
          rounded
        ) {
          setWaves([...waves, { width, height, color, brightness, rounded }]);
        }
      }
      if (type === "Radio") {
        const container = (
          childrenRef.current?.childNodes[1] as HTMLSpanElement
        )?.getBoundingClientRect();

        const { color, brightness } = getHoverBorderColor(
          children?.props?.children[1]?.props?.className
        );

        const { rounded } = getRounded(
          children?.props?.children[1]?.props?.className
        );

        const width = container?.width;
        const height = container?.height;

        if (
          width &&
          height &&
          color &&
          brightness &&
          color !== "none" &&
          brightness !== 0 &&
          rounded
        ) {
          setWaves([...waves, { width, height, color, brightness, rounded }]);
        }
      }
    }
  };

  return (
    <span onMouseDown={addWave} className="flex">
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
  twClassString: string
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

const getRounded = (twClassString: string) => {
  return {
    rounded: twClassString
      .split(" ")
      .filter((tw) => tw.includes("rounded"))
      .pop(),
  };
};

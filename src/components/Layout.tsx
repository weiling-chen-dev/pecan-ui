import { ReactNode } from "react";

export const Layout = ({
  header,
  paragraph,
  children,
}: {
  header?: ReactNode;
  paragraph?: ReactNode;
  children: ReactNode;
}): ReactNode => {
  return (
    <div className="m-10 space-y-4">
      <b>{header}</b>
      <p>{paragraph}</p>
      {children}
    </div>
  );
};

export const FlexRow = ({ children }: { children: ReactNode }) => {
  return <div className="flex gap-2">{children}</div>;
};

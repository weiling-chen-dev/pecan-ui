import { ReactNode } from "react";

const Layout = ({
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
      <div className="flex gap-2">{children}</div>
    </div>
  );
};

export default Layout;

import React from "react";
import themes from "./_.module.scss";
import clsx from "clsx";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

function Frame(props: IProps) {
  const attribute = { ...props };
  attribute.className = clsx(props.className, themes.frame);
  return <div {...attribute}>{attribute.children}</div>;
}

export default Frame;

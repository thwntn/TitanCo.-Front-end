import React from "react";
import themes from "./Button.module.scss";
import clsx from "clsx";
import NextButtonIcon from "../../Assets/Icon/Button/Next.svg";
import AddButtonIcon from "../../Assets/Icon/Button/Add.svg";

type Mode = "warning" | "default";
type Icon = "next" | "add";

interface IconDefine {
  [key: string]: string;
}

const iconDefine: IconDefine = {
  add: AddButtonIcon,
  next: NextButtonIcon,
};

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  mode?: Mode;
  children: React.ReactNode;
  icon?: Icon;
}

function Button(props: IProps) {
  const detailedHTMLProps = Object.assign(Object, props);
  detailedHTMLProps.className = clsx(
    props.mode && themes[props.mode],
    themes.button,
    props.className
  );

  return (
    <button {...detailedHTMLProps}>
      <span>{props.children}</span>
      {props.icon && (
        <img className={themes.icon} src={iconDefine[props.icon]} />
      )}
    </button>
  );
}

export default Button;

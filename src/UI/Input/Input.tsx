import clsx from "clsx";
import themes from "./Input.module.scss";
import { CSSProperties } from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  mode?: "view";
}

const viewSetting: CSSProperties = {
  padding: 0,
  boxShadow: "none",
  borderRadius: 0,
  background: "none",
  border: "none",
};

function Input(props: IProps) {
  const detailedHTMLProps = Object.assign({}, props);
  detailedHTMLProps.className = clsx(themes.input, props.className);

  if (props.mode == "view")
    detailedHTMLProps.style = { ...detailedHTMLProps.style, ...viewSetting };
  return <input {...detailedHTMLProps} />;
}

export default Input;

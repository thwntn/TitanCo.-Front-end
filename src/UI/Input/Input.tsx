import clsx from "clsx";
import themes from "./Input.module.scss";
import { CSSProperties } from "react";

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  mode?: "view";
  title?: string;
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
  return (
    <div className={themes.frame}>
      {props.title && <span className={themes.title}>{props.title}</span>}
      <input {...detailedHTMLProps} />
    </div>
  );
}

export default Input;

import clsx from "clsx";
import themes from "./Input.module.scss";

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  title?: string;
}

function Input(props: IProps) {
  const detailedHTMLProps = Object.assign({}, props);
  detailedHTMLProps.className = clsx(props.className, themes.input);

  return (
    <div className={themes.frame}>
      {props.title && <span className={themes.title}>{props.title}</span>}
      <input {...detailedHTMLProps} />
    </div>
  );
}

export default Input;

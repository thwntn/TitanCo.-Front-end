import clsx from "clsx";
import themes from "./_.module.scss";

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
}

function Text(props: IProps) {
  const attribute = { ...props };
  attribute.className = clsx(props.className, themes.text);
  return (
    <div className={themes.frame}>
      {props.title && <span className={themes.title}>{props.title}</span>}
      <textarea {...attribute}></textarea>
    </div>
  );
}

export default Text;

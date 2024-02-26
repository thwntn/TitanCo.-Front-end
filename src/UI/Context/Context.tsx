import Icon from "../Icon/Icon";
import MoreNoteIcon from "../../Assets/Icon/Context/More.svg";
import themes from "./Context.module.scss";
import clsx from "clsx";

export interface ContextHandle {
  name: string;
  cb: () => void;
}

interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  items: ContextHandle[];
}

function Context(props: IProps) {
  const detailedHTMLProps = Object.assign({}, props);
  detailedHTMLProps.className = clsx(themes.button, props.className);

  return (
    <button {...detailedHTMLProps}>
      <Icon src={MoreNoteIcon}></Icon>
      <ul className={themes.list}>
        {props.items.map((item, index) => (
          <li key={index} onClick={item.cb}>
            {item.name}
          </li>
        ))}
      </ul>
    </button>
  );
}

export default Context;

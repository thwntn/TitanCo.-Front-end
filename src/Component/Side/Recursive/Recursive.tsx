import clsx from "clsx";
import { Item } from "../Model";
import themes from "./Recursive.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Default = 1;

interface IProps {
  sub?: boolean;
  title?: string;
  item: Item[];
}

function RecursiveComponent(props: IProps) {
  const [active, setActive] = useState<Item | null>(props.item[Default]);
  const navigation = useNavigate();

  function click(item: Item) {
    if (item.children)
      setActive((previous) => (item == previous ? null : item));
    else navigation(String(item.path));
  }
  return (
    <ul className={themes.items}>
      {props.title && <span className={themes.title}>{props.title}</span>}
      {props.item.map((item, index) => (
        <li
          className={clsx(themes.item, {
            [themes.hover]: item.children === undefined,
            [themes.active]: location.pathname.includes(String(item.path)),
          })}
          key={index}
          onClick={() => click(item)}
        >
          <div className={themes.content}>
            {props.sub && <div className={themes.prefix}></div>}
            {props.sub === undefined && (
              <img className={themes.icon} src={item.icon}></img>
            )}
            <span>{item.name}</span>
          </div>
          {item.children && active == item && (
            <div
              className={themes.frameChildren}
              onClick={(e) => e.stopPropagation()}
            >
              <RecursiveComponent
                sub={true}
                item={item.children}
              ></RecursiveComponent>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default RecursiveComponent;

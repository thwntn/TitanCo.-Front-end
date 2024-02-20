import { IApp } from "../../Container/Linked";
import themes from "./Linked.module.scss";

interface IProps {
  items: IApp[];
}

function LinkedComponent(props: IProps) {
  function redirect(url: string) {
    window.location.href = url;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <ul className="grid gap-8 p-4 py-12">
        {props.items.map((item, index) => (
          <li
            onClick={() => redirect(item.url)}
            key={index}
            className="hover:bg-gray-100 p-2 rounded-md cursor-pointer"
          >
            <img className="w-[24px]" src={item.icon} />
          </li>
        ))}
      </ul>
      <div className={themes.logo}></div>
    </div>
  );
}

export default LinkedComponent;

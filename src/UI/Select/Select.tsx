import { useState } from "react";

export interface Item extends Object {
  id: number;
  name: string;
}

interface IProps {
  items: Item[];
  value: string;
  title?: string;
  onSelect?: (item: any) => void;
}

function Select(props: IProps) {
  const [open, setOpen] = useState(false);

  function select<T>(item: T) {
    if (props.onSelect) props.onSelect(item);
    setOpen(false);
  }

  return (
    <div className="relative cursor-pointer">
      {props.title && (
        <span className="absolute left-[6px] top-[-8px] text-[10px] px-[8px] z-10 bg-white">
          {props.title}
        </span>
      )}
      <span
        className="flex items-center px-4 rounded-[8px] custom-border h-[42px]"
        onClick={() => setOpen((previous) => previous == false)}
      >
        {props.value}
      </span>
      {open && (
        <ul className="flex flex-col gap-2 absolute w-full top-[calc(100%+8px)] z-20 bg-white custom-shadow">
          {props.items.map((item, index) => (
            <li
              className="flex items-center px-4 rounded-md h-[42px] hover:bg-gray-100"
              onClick={() => select(item)}
              key={index}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;

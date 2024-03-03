import { useState } from "react";

export interface Item extends Object {
  id: string | number;
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
  const [items, setItem] = useState(props.items);

  function select<T>(item: T) {
    if (props.onSelect) props.onSelect(item);
    setOpen(false);
  }

  function click() {
    setOpen((previous) => previous == false);
    setItem(props.items);
  }

  function search(content: string) {
    if (content === String()) setItem(props.items);
    const result = props.items.filter((item) => item.name.includes(content));
    setItem(result);
  }

  return (
    <div className="relative cursor-pointer select-none h-fit">
      {props.title && (
        <span className="absolute left-[6px] top-[-8px] text-[10px] px-[8px] z-10 bg-white rounded-[4px]">
          {props.title}
        </span>
      )}
      <span
        className="flex items-center px-4 rounded-[8px] bg-white h-[42px] custom-border"
        onClick={click}
      >
        {props.value}
      </span>
      {open && (
        <ul className="flex flex-col absolute w-full top-[calc(100%+8px)] z-20 bg-white overflow-hidden rounded-md custom-shadow">
          <input
            type="text"
            className=" p-4 border-b border-gray-100 outline-none"
            placeholder="Tìm kiếm..."
            onChange={(event) => search(event.target.value)}
          />
          {items.length === 0 && <span className="p-4">Danh sách trống</span>}
          {items.map((item, index) => (
            <li
              className="flex items-center px-4 h-[42px] hover:bg-gray-100"
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

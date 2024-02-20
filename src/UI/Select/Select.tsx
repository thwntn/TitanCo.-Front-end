import { useState } from "react";

interface Item extends Object {
  id: number;
  name: string;
}

interface IProps {
  items: Item[];
  value: string;
  onSelect: (item: any) => void;
}

function Select(props: IProps) {
  const [open, setOpen] = useState(false);

  function select<T>(item: T) {
    props.onSelect(item);
    setOpen(false);
  }

  return (
    <div className=" relative">
      <span
        className="flex items-center px-4 rounded-md custom-border h-[42px]"
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

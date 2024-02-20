import { useLocation } from "react-router-dom";

interface IProps {
  title: string;
}

function Name(props: IProps) {
  const location = useLocation();
  const redirect = location.pathname.split("/").filter((item) => item !== "");
  return (
    <div className="flex flex-col gap-4">
      <span className="text-[24px] font-bold text-black">{props.title}</span>
      <ul className="flex gap-4">
        {redirect.map((item, index) => (
          <li key={index} className="flex items-center gap-4 capitalize">
            {item}{" "}
            <div className="w-[6px] rounded-full h-[6px] bg-[#6a6a6a]"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Name;

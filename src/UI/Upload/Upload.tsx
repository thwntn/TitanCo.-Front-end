import { useRef } from "react";
import UploadIcon from "./Upload.svg";
import clsx from "clsx";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  content?: string;
}

function Upload(props: IProps) {
  const attrubute = { ...props };
  const refInput = useRef<HTMLInputElement | null>(null);

  // @Custom
  attrubute.className = clsx(attrubute.className, "hidden");

  function onClick() {
    if (refInput.current) refInput.current.click();
  }
  return (
    <div
      className="flex justify-center items-center flex-col gap-2 min-h-[256px] border rounded-xl cursor-pointer hover:bg-gray-50"
      onClick={onClick}
    >
      <input
        {...attrubute}
        ref={refInput}
        onChange={props.onChange}
        type="file"
      />
      <img src={UploadIcon} className="w-[32px]" />
      {props.content && <span className="text-[12px]">{props.content}</span>}
    </div>
  );
}

export default Upload;

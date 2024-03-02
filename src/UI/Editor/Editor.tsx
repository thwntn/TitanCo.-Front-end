import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "./Editor.scss";
import { formats, modules } from "./Options";

interface IProps {
  onChange?: (value: string) => void;
  value?: string;
}

function Editor(props: IProps) {
  return (
    <ReactQuill
      placeholder="@Write something ..."
      modules={modules}
      formats={formats}
      theme="snow"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Editor;

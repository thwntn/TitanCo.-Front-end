import Button from "../../UI/Button/Button";
import Editor from "../../UI/Editor/Editor";
import Input from "../../UI/Input/Input";
import BackgroundNoteImage from "../../Assets/Image/Note/Background.png";
import { NoteResponse } from "../../Store/Reducer/Note/Model";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/Store";
import { noteSlice } from "../../Store/Reducer/Note/Note";

interface IProps {
  save: () => void;
  updateNote: (key: string, value: string) => void;
  item: NoteResponse;
}

function EditorNoteComponent(props: IProps) {
  const dispatch = useDispatch<AppDispatch>();

  function close() {
    dispatch(noteSlice.actions.select(null));
  }
  return (
    <div
      onClick={close}
      className="fixed inset-0 bg-[#00000034] z-50 p-4 h-[100vh] flex justify-end w-full items-end flex-col animation-opacity"
    >
      {/* <Icon
        src={CloseNoteIcon}
        onClick={close}
        className="absolute top-2 right-2"
      ></Icon> */}
      <div
        onClick={(event) => event.stopPropagation()}
        className="p-8 overflow-y-auto h-full w-[512px] bg-white rounded-2xl animation-slide-up"
      >
        <img
          src={BackgroundNoteImage}
          className="h-[356px] w-full object-contain p-16"
        />
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-4 py-6">
            <Input
              className="text font-bold text-4xl"
              value={props.item.name}
              onChange={(event) => props.updateNote("name", event.target.value)}
              mode="view"
            ></Input>
            <Input
              value={props.item.description}
              onChange={(event) =>
                props.updateNote("description", event.target.value)
              }
              mode="view"
            ></Input>
          </div>
          <div className="px-6">
            <Button mode="default" icon="next" onClick={props.save}>
              Save
            </Button>
          </div>
        </div>
        <Editor
          onChange={(value) => void props.updateNote("content", value)}
          defaultValue={props.item.content}
        ></Editor>
      </div>
    </div>
  );
}

export default EditorNoteComponent;

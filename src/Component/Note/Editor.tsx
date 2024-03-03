import Button from "../../UI/Button/Button";
import Editor from "../../UI/Editor/Editor";
import Input from "../../UI/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import {
  fetchNotes,
  info,
  noteSlice,
  updateNote,
} from "../../Store/Reducer/Note/Note";
import Name from "../../UI/Name/Name";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Frame from "../../UI/Frame/Frame";

function EditorNoteComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  const noteState = useSelector((rootState: RootState) => rootState.noteSate);

  function save() {
    noteState.noteSelected &&
      dispatch(updateNote(noteState.noteSelected)).then(() =>
        dispatch(fetchNotes(noteState.statusNote))
      );
  }

  function modify(key: string, value: string) {
    if (noteState.noteSelected)
      dispatch(
        noteSlice.actions.select({ ...noteState.noteSelected, [key]: value })
      );
  }

  function session() {
    dispatch(info(String(params.noteId)));
  }

  useEffect(session, []);
  return (
    <Frame>
      <Name title="Editor"></Name>
      <div className="flex gap-12">
        <div className="flex flex-col gap-4 min-w-[256px]">
          <div className="text-[16px] font-bold">Detail</div>
          <Input
            value={noteState.noteSelected?.description}
            onChange={(event) => modify("description", event.target.value)}
          ></Input>
        </div>
        <div className="flex flex-col px-8 gap-4 w-full custom-shadow rounded-2xl">
          <div className="flex flex-col gap-4 py-6">
            <div className="text-[12px]">Name</div>
            <Input
              value={noteState.noteSelected?.name}
              onChange={(event) => modify("name", event.target.value)}
            ></Input>
          </div>
          <div className="text-[12px]">Content</div>
          <div className="bg-[#F6F7F8] min-h-[512px] rounded-xl">
            <Editor
              onChange={(value) => void modify("content", value)}
              value={noteState.noteSelected?.content}
            ></Editor>
          </div>
          <div className=" w-full flex justify-end p-8">
            <Button mode="default" icon="next" onClick={save}>
              Save Change
            </Button>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export default EditorNoteComponent;

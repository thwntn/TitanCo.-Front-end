import { useDispatch, useSelector } from "react-redux";
import EditorNoteComponent from "../../Component/Note/Editor";
import { AppDispatch, RootState } from "../../Store/Store";
import {
  fetchNotes,
  noteSlice,
  updateNote,
} from "../../Store/Reducer/Note/Note";

function EditorNoteContainer() {
  const dispatch = useDispatch<AppDispatch>();
  const noteState = useSelector((rootState: RootState) => rootState.noteSate);

  function save() {
    noteState.noteSelected &&
      dispatch(updateNote(noteState.noteSelected)).then(() =>
        dispatch(fetchNotes(noteState.statusNote))
      );
  }

  function modify(key: string, value: string) {
    dispatch(
      noteSlice.actions.select({ ...noteState.noteSelected, [key]: value })
    );
  }

  return (
    noteState.noteSelected && (
      <EditorNoteComponent
        updateNote={modify}
        save={save}
        item={noteState.noteSelected}
      ></EditorNoteComponent>
    )
  );
}

export default EditorNoteContainer;

import { useEffect } from "react";
import NoteComponent from "../../Component/Note/Note";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/Store";
import { fetchNotes, noteSlice } from "../../Store/Reducer/Note/Note";
import { StatusNote } from "../../Shared/Enum";

function NoteContainer() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNotes(StatusNote.Default)).then(
      () => void dispatch(noteSlice.actions.status(StatusNote.Default))
    );
  }, []);
  return <NoteComponent></NoteComponent>;
}

export default NoteContainer;

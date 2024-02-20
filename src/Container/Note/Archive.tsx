import { useEffect } from "react";
import NoteComponent from "../../Component/Note/Note";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/Store";
import { fetchNotes, noteSlice } from "../../Store/Reducer/Note/Note";
import { StatusNote } from "../../Shared/Enum";

function ArchiveContainer() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchNotes(StatusNote.Archive)).then(() =>
      dispatch(noteSlice.actions.status(StatusNote.Archive))
    );
  }, []);
  return <NoteComponent></NoteComponent>;
}

export default ArchiveContainer;

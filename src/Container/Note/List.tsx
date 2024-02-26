import ListNoteComponent from "../../Component/Note/List";
import { useDispatch, useSelector } from "react-redux";
import { ContextHandle } from "../../UI/Context/Context";
import { AppDispatch, RootState } from "../../Store/Store";
import {
  archiveNote,
  createNote,
  fetchNotes,
  moveToTrash,
  noteSlice,
  restoreNote,
} from "../../Store/Reducer/Note/Note";
import { NoteResponse } from "../../Store/Reducer/Note/Model";
import { mainSlice } from "../../Store/Reducer/Main/Main";
import { useDebouncedCallback } from "use-debounce";
import { Json } from "../../Handle/Json";
import { StatusNote } from "../../Shared/Enum";
import { useEffect } from "react";
const NAME_DEFAULT = "Write down your ideas! 💡";
const DESCRPTION_DEFAULT = "Title, short description, image...";
const CONTENT_DEFAULT =
  '"Sometimes, on Monday, when servers at A16 are announcing the special, you can almost fell the excitement at the table when the waiters say, `And of course, since it`s Monday... we have meatballs.` say Shelley Lingren."';

function ListNoteContainer() {
  const dispatch = useDispatch<AppDispatch>();
  const noteState = useSelector((rootState: RootState) => rootState.noteSate);

  const filter = useDebouncedCallback((content: string) => {
    dispatch(fetchNotes(noteState.statusNote)).then((data) => {
      const notes = Json.map<NoteResponse[]>(data.payload).filter((item) =>
        item.name.toLocaleLowerCase().includes(content.toLocaleLowerCase())
      );
      dispatch(noteSlice.actions.note(notes));
    });
  }, 2000);

  function getContextItemNote(item: NoteResponse): ContextHandle[] {
    const context: any = {
      [StatusNote.Default]: [
        { name: "Archive", cb: () => archive(item) },
        {
          name: "Remove",
          cb: () => toTrash(item),
        },
      ],
      [StatusNote.Archive]: [
        {
          name: "Restore",
          cb: () => void restore(item),
        },
        {
          name: "Remove",
          cb: () => toTrash(item),
        },
      ],
      [StatusNote.Remove]: [
        {
          name: "Restore",
          cb: () => void restore(item),
        },
      ],
    };
    return context[noteState.statusNote];
  }

  function select(item: NoteResponse) {
    dispatch(noteSlice.actions.select(item));
  }

  function restore(item: NoteResponse) {
    dispatch(restoreNote(item)).then(() =>
      dispatch(fetchNotes(noteState.statusNote))
    );
  }

  function archive(item: NoteResponse) {
    dispatch(
      mainSlice.actions.confirm({
        cb: () =>
          void dispatch(archiveNote(item)).then(() =>
            dispatch(fetchNotes(noteState.statusNote))
          ),
      })
    );
  }

  function toTrash(item: NoteResponse) {
    dispatch(
      mainSlice.actions.confirm({
        cb: () =>
          void dispatch(moveToTrash(item)).then(() =>
            dispatch(fetchNotes(noteState.statusNote))
          ),
      })
    );
  }

  function create() {
    dispatch(
      createNote({
        name: NAME_DEFAULT,
        content: CONTENT_DEFAULT,
        description: DESCRPTION_DEFAULT,
      })
    ).then(() => dispatch(fetchNotes(noteState.statusNote)));
  }

  useEffect(function () {
    dispatch(fetchNotes(noteState.statusNote));
  }, []);

  return (
    <ListNoteComponent
      select={select}
      create={create}
      filter={filter}
      getContextItemNote={getContextItemNote}
    ></ListNoteComponent>
  );
}

export default ListNoteContainer;

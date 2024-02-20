import React from "react";
import EditorNoteContainer from "../../Container/Note/Editor";
import ListNoteContainer from "../../Container/Note/List";

function NoteComponent() {
  return (
    <React.Fragment>
      <ListNoteContainer></ListNoteContainer>
      <EditorNoteContainer></EditorNoteContainer>
    </React.Fragment>
  );
}

export default NoteComponent;

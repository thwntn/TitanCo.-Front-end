import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { NoteRequest, NoteResponse, NoteState } from "./Model";
import { StatusNote } from "../../../Shared/Enum";
import { instance } from "../../Axios/Axios";

export const noteState: NoteState = {
  statusNote: StatusNote.Default,
  noteSelected: null,
  notes: [],
};

export const noteSlice = createSlice({
  name: typeof noteState,
  initialState: noteState,
  reducers: {
    // @Set note
    note: (state, actions) => {
      state.notes = actions.payload;
    },
    select: (state, actions) => {
      state.noteSelected = actions.payload;
    },
    status: (state, actions) => {
      state.statusNote = actions.payload;
    },
  },
  extraReducers(builder) {
    // @Fetch note
    builder.addCase(fetchNotes.fulfilled, (state, actions) => {
      state.notes = actions.payload.data;
    });

    // @Infomation
    builder.addCase(info.fulfilled, (state, actions) => {
      state.noteSelected = actions.payload.data;
    });
  },
});

export const updateNote = createAsyncThunk(
  "updateNote",
  (note: NoteResponse) => {
    const response = instance.put("/Note", note);
    return response;
  }
);

export const createNote = createAsyncThunk(
  "createNote",
  async (noteRequest: NoteRequest) => {
    const response = instance.post("/Note", noteRequest);
    return response;
  }
);

export const moveToTrash = createAsyncThunk(
  "moveToTrash",
  async (note: NoteResponse) => {
    const response = instance.patch(
      `${"/Note/MoveToTrash"}/${note.id}`,
      Object
    );
    return response;
  }
);

export const archiveNote = createAsyncThunk(
  "archiveNote",
  async (note: NoteResponse) => {
    const response = instance.patch(`${"/Note/Archive"}/${note.id}`, Object);
    return response;
  }
);

export const removeNote = createAsyncThunk(
  "removeNote",
  async (note: NoteResponse) => {
    const response = instance.delete(`${"/Note"}/${note.id}`);
    return response;
  }
);

export const fetchNotes = createAsyncThunk(
  "fetchNotes",
  async (status: StatusNote) => {
    const response = await instance<NoteResponse[]>(
      `${"/Note/List"}/${status}`
    );
    return response;
  }
);

export const info = createAsyncThunk("info", async (noteId: string) => {
  const response = await instance<NoteResponse>(`Note/${noteId}`);
  return response;
});

export const restoreNote = createAsyncThunk(
  "restoreNote",
  async (note: NoteResponse) => {
    const response = instance.patch(`${"/Note/Restore"}/${note.id}`, Object);
    return response;
  }
);

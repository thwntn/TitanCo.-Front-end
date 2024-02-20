import { StatusNote } from "../../../Shared/Enum";

export interface NoteState {
  statusNote: StatusNote;
  noteSelected: NoteResponse | null;
  notes: NoteResponse[];
}

export interface NoteResponse {
  id: number;
  name: string;
  created: string;
  description: string;
  status: number;
  content: string;
}

export interface NoteRequest {
  name: string;
  content: string;
  description: string;
}

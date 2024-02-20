import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Content, GeminiState, Message } from "./Model";
import { Path } from "./Path";
import { instance } from "../../Axios/Axios";

export enum Owner {
  Gemini = 0,
  You = 1,
}

const initState: GeminiState = {
  messages: [],
};

export const GeminiSlice = createSlice({
  name: typeof initState,
  initialState: initState,
  reducers: {
    message: (state, actions: { payload: Content }) => {
      state.messages.push(actions.payload);
    },
    clean: (state) => {
      state.messages = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(chatRequest.fulfilled, (state, actions) => {
      const message = actions.payload.data.map((item) => ({
        text: item.text,
        owner: Owner.Gemini,
      }));
      state.messages.push(...message);
    });
  },
});

export const chatRequest = createAsyncThunk(Path.Gemini, (text: string) => {
  const response = instance.get<Message[]>(`${Path.Gemini}?input=${text}`);
  return response;
});

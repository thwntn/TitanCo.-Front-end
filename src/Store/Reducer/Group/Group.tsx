import { createSlice } from "@reduxjs/toolkit";
import { GroupState } from "./Model";
import { Group } from "../Stogare/Model";
import { info } from "./Thunk";

const initialState: GroupState = {
  list: [],
  select: null,
};

export const groupSlice = createSlice({
  name: typeof initialState,
  initialState: initialState,
  reducers: {
    select: (state, actions: { payload: Group }) => {
      state.select = actions.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(info.fulfilled, (state, actions) => {
      state.select = actions.payload.data;
    });
  },
});

import { createSlice } from "@reduxjs/toolkit";
import { GroupState } from "./Model";
import { Group } from "../Stogare/Model";
import { changeImage, info, listRequest } from "./Thunk";
import { User } from "../Identity/Model";

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
    changeName: (state, actions: { payload: string }) => {
      if (state.select) state.select.name = actions.payload;
    },
    changeOwner: (state, actions: { payload: User }) => {
      if (state.select) state.select.profile = actions.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(info.fulfilled, (state, actions) => {
      state.select = actions.payload.data;
    });

    builder.addCase(changeImage.fulfilled, function (state, actions) {
      state.select = actions.payload.data;
    });

    builder.addCase(listRequest.fulfilled, function (state, actions) {
      state.list = actions.payload.data;
    });
  },
});

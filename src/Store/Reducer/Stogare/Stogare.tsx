import { createSlice } from "@reduxjs/toolkit";
import { Home, Stogare, StogareState } from "./Model";
import {
  allFolderRequest,
  destinationRequest,
  groupRequest,
  homeRequest,
  recentRequest,
  stogareRequest,
} from "./Thunk";
import { ContextMode, contexts } from "./Context";

export enum StogareType {
  File = 0,
  Folder = 1,
  DefaultMainFolder = -1,
}

export const ROOT_FOLDER = -1;

const type: { [key: string]: string[] } = {
  music: [".mp3", ".flac", ".m4a"],
  video: [".mp4", ".3gp", ".mov"],
  picture: [".jpg", ".jpeg", ".png", ".webp"],
};

export function fileName(name: string) {
  for (const key in type)
    if (type[key].some((item) => name.toLocaleLowerCase().includes(item)))
      return key;
  return null;
}

export const RENDER_NUMBER = 12;
export function byteToSize(size: number) {
  return (size / 1024 / 1024).toFixed(2);
}

const stogareState: StogareState = {
  current: ROOT_FOLDER,
  home: new Home(),
  stogares: [],
  groups: [],
  context: [],
  destination: [],
};

export const stogareSlice = createSlice({
  name: typeof stogareState,
  initialState: stogareState,
  reducers: {
    current: (state, actions: { payload: number }) => {
      state.current = actions.payload;
    },
    sortByName: (state) => {
      state.stogares = state.stogares.sort((a, b) =>
        a.displayName > b.displayName ? 1 : -1
      );
    },
    newest: (state) => {
      state.stogares = state.stogares.sort((a, b) =>
        a.created > b.created ? -1 : 1
      );
    },
    latest: (state) => {
      state.stogares = state.stogares.sort((a, b) =>
        a.created < b.created ? -1 : 1
      );
    },
    context: (
      state,
      actions: { payload: { mode: ContextMode; item: Stogare } }
    ) => {
      state.context = contexts[actions.payload.mode](actions.payload.item);
    },
  },
  extraReducers(builder) {
    builder.addCase(homeRequest.fulfilled, (state, actions) => {
      state.home = actions.payload.data;
    });
    builder.addCase(recentRequest.fulfilled, (state, actions) => {
      state.stogares = actions.payload.data;
    });
    builder.addCase(groupRequest.fulfilled, (state, actions) => {
      state.groups = actions.payload.data;
    });
    builder.addCase(stogareRequest.fulfilled, (state, actions) => {
      state.stogares = actions.payload.data;
    });
    builder.addCase(allFolderRequest.fulfilled, (state, actions) => {
      state.stogares = actions.payload.data;
    });
    builder.addCase(destinationRequest.fulfilled, (state, actions) => {
      state.stogares = actions.payload.data;
    });
  },
});

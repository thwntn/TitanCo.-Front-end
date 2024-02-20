import { createAsyncThunk } from "@reduxjs/toolkit";
import { Path } from "./Path";
import {
  CreateFolder,
  Group,
  Home,
  Move,
  Rename,
  Stogare,
  UploadFile,
} from "./Model";
import { instance } from "../../Axios/Axios";

export const allFolderRequest = createAsyncThunk(Path.Folders, () => {
  const response = instance.get<Stogare[]>(Path.Folders);
  return response;
});

export const homeRequest = createAsyncThunk(Path.Home, () => {
  const response = instance.get<Home>(Path.Home);
  return response;
});

export const groupRequest = createAsyncThunk(Path.Group, () => {
  const response = instance.get<Group[]>(Path.Group);
  return response;
});

export const recentRequest = createAsyncThunk(Path.Recent, () => {
  const response = instance.get<Stogare[]>(Path.Recent);
  return response;
});

export const stogareRequest = createAsyncThunk(
  Path.Stogare,
  (stogareId: number) => {
    const response = instance.get<Stogare[]>(`${Path.Stogare}/${stogareId}`);
    return response;
  }
);

export const createFolder = createAsyncThunk(
  Path.Stogare + "post",
  (create: CreateFolder) => {
    const response = instance.post<Stogare[]>(
      `${Path.Stogare}/${create.parent}`,
      create
    );
    return response;
  }
);

export const uploadFileRequest = createAsyncThunk(
  Path.Upload,
  (upload: UploadFile) => {
    const response = instance.post<Stogare[]>(
      `${Path.Upload}/${upload.stogareId}`,
      upload.form
    );
    return response;
  }
);

export const removeStogareRequest = createAsyncThunk(
  Path.Stogare + "delete",
  function (stogareId: number) {
    instance.delete(`${Path.Stogare}/${stogareId}`);
  }
);

export const renameStogareRequest = createAsyncThunk(
  Path.Rename,
  function (rename: Rename) {
    instance.patch(`${Path.Rename}/${rename.stogareId}`, rename);
  }
);

export const destinationRequest = createAsyncThunk(
  Path.ListDestination,
  function (stogareId: number) {
    const response = instance.get<Stogare[]>(
      `${Path.ListDestination}/${stogareId}`
    );
    return response;
  }
);

export const moveRequest = createAsyncThunk(Path.Move, function (move: Move) {
  instance.patch(`${Path.Move}`, move);
});

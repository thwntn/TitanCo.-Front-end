import { createAsyncThunk } from "@reduxjs/toolkit";
import { Path } from "./Path";
import { instance } from "../../Axios/Axios";
import { Group, Stogare } from "../Stogare/Model";
import { AddMember, ChangeImage, Create, RemoveMember, Rename } from "./Model";

export const groupRequest = createAsyncThunk(Path.Group, () => {
  const response = instance.get<Group[]>(Path.Group);
  return response;
});

export const createGroup = createAsyncThunk(Path.Group, (create: Create) => {
  const response = instance.post<Group>(Path.Group, create);
  return response;
});

export const listStogareRequest = createAsyncThunk(
  Path.ListStogare,
  (groupId: string) => {
    const response = instance.get<Stogare[]>(`${Path.ListStogare}/${groupId}`);
    return response;
  }
);

export const info = createAsyncThunk("group.info", (groupId: string) => {
  const response = instance.get<Group>(`${Path.Group}/${groupId}`);
  return response;
});

export const addMember = createAsyncThunk(
  "group.addMember",
  (addMember: AddMember) => {
    const response = instance.post(Path.AddMember, addMember);
    return response;
  }
);

export const changeImage = createAsyncThunk(
  "group.changeImage",
  function (changeImage: ChangeImage) {
    const response = instance.post<Group>(
      `${Path.Group}/${Path.ChangeImage}/${changeImage.groupId}`,
      changeImage.form
    );
    return response;
  }
);

export const removeMember = createAsyncThunk(
  "group.removeMember",
  (removeMember: RemoveMember) => {
    const response = instance.patch<Group>(Path.RemoveMember, removeMember);
    return response;
  }
);

export const rename = createAsyncThunk(
  "group.rename",
  (removeMember: Rename) => {
    const response = instance.patch<Group>(Path.Rename, removeMember);
    return response;
  }
);

export const listRequest = createAsyncThunk("group.listRequest", () => {
  const response = instance.get<Group[]>(`${Path.Group}/${Path.ListRequest}`);
  return response;
});

export const acceptRequest = createAsyncThunk(
  "group.acceptInvite",
  function (groupId: string) {
    const response = instance.patch(
      `${Path.Group}/${Path.AcceptInvite}/${groupId}`
    );
    return response;
  }
);

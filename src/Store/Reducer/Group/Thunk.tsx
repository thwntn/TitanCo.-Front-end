import { createAsyncThunk } from "@reduxjs/toolkit";
import { Path } from "./Path";
import { instance } from "../../Axios/Axios";
import { Group, Stogare } from "../Stogare/Model";
import { AddMember, Create } from "./Model";

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
  (groupId: number) => {
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

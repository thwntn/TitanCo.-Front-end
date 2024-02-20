import { createAsyncThunk } from "@reduxjs/toolkit";
import { Path } from "./Path";
import { instance } from "../../Axios/Axios";
import { Group, Stogare } from "../Stogare/Model";

export const groupRequest = createAsyncThunk(Path.Group, () => {
  const response = instance.get<Group[]>(Path.Group);
  return response;
});

export const listStogareRequest = createAsyncThunk(
  Path.ListStogare,
  (groupId: number) => {
    const response = instance.get<Stogare[]>(`${Path.ListStogare}/${groupId}`);
    return response;
  }
);

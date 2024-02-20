import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreatePlanning, Planning, PlanningState } from "./Model";
import { Path } from "./Path";
import { instance } from "../../Axios/Axios";

const calendarState: PlanningState = {
  plannings: [],
  currentTime: new Date(),
  selected: null,
  create: null,
};

export const calendarSlice = createSlice({
  name: typeof calendarState,
  initialState: calendarState,
  reducers: {
    currentTime: (state, actions: { payload: Date }) => {
      state.currentTime = actions.payload;
    },
    select: (state, actions: { payload: string }) => {
      state.selected = actions.payload;
    },
    create: (state, actions) => {
      state.create = actions.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(planningGetRequest.fulfilled, (state, actions) => {
      state.plannings = actions.payload.data;
    });
  },
});

export const planningGetRequest = createAsyncThunk(
  Path.Planning,
  (weekOfYear: number) => {
    const response = instance.get<Planning[]>(`${Path.Planning}/${weekOfYear}`);
    return response;
  }
);

export const createRequest = createAsyncThunk(
  Path.Planning + typeof instance.post,
  (create: CreatePlanning) => {
    const response = instance.post<Planning[]>(Path.Planning, create);
    return response;
  }
);

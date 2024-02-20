import { createSlice } from "@reduxjs/toolkit";
import { IConfirm, ILoading, MainState } from "./Model";
import { User } from "../Identity/Model";
import { store } from "../../Store";

const mainState: MainState = {
  alerts: [],
  identity: null,
  confirm: null,
  loading: null,

  // @Request
};

export const mainSlice = createSlice({
  name: typeof mainState,
  initialState: mainState,
  reducers: {
    // @User
    identity: (state, actions: { payload: User }) =>
      void (state.identity = actions.payload),

    // @Alert
    alert: (state, actions: { payload: string }) => {
      state.alerts.push(actions.payload);
      setTimeout(() => store.dispatch(mainSlice.actions.shift()), 2000);
    },
    shift: (state) => void state.alerts.shift(),

    // @Confirm
    confirm: (state, actions: { payload: IConfirm | null }) =>
      void (state.confirm = actions.payload),

    // @Loading
    loading: (state, actions: { payload: ILoading | null }) =>
      void (state.loading = actions.payload),
  },
});

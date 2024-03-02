import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./Reducer/Main/Main";
import { noteSlice } from "./Reducer/Note/Note";
import { identitySlice } from "./Reducer/Identity/User";
import { stogareSlice } from "./Reducer/Stogare/Stogare";
import { calendarSlice } from "./Reducer/Calendar/Planning";
import { GeminiSlice } from "./Reducer/Gemini/Gemini";
import { groupSlice } from "./Reducer/Group/Group";
import { invoiceSlice } from "./Reducer/Invoice/Invoice";

export const store = configureStore({
  reducer: {
    mainState: mainSlice.reducer,
    noteSate: noteSlice.reducer,
    identityState: identitySlice.reducer,
    stogareState: stogareSlice.reducer,
    groupState: groupSlice.reducer,
    calendarState: calendarSlice.reducer,
    geminiState: GeminiSlice.reducer,
    invoiceState: invoiceSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

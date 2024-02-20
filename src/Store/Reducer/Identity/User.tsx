import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Code, IdentityState, Local, Login, Signup, User } from "./Model";
import { instance } from "../../Axios/Axios";
import { Path } from "./Path";

export enum UserStatus {
  Open = 0,
  Valid = 1,
  Lock = 2,
}

const initialState: IdentityState = {
  user: null,
  localObject: {},
};

export const identitySlice = createSlice({
  initialState,
  name: typeof initialState,
  reducers: {
    load: (state) => {
      state.user = fromStogare();
    },
    setLocalObject: (state, actions: { payload: Local }) => {
      state.localObject = actions.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(changeAvatar.fulfilled, (state, actions) => {
      updateStogare(actions.payload.data);
      state.user = actions.payload.data;
    });

    builder.addCase(changeCoverPicture.fulfilled, (state, actions) => {
      updateStogare(actions.payload.data);
      state.user = actions.payload.data;
    });

    builder.addCase(loginRequest.fulfilled, (state, actions) => {
      updateStogare(actions.payload.data);
      state.user = actions.payload.data;
    });

    builder.addCase(signupRequest.fulfilled, (state, actions) => {
      updateStogare(actions.payload.data);
      state.user = actions.payload.data;
    });
  },
});

function fromStogare(): User | null {
  const json = window.localStorage.getItem(import.meta.env.VITE_KEY);
  if (json == null) return json;
  return JSON.parse(json);
}

function updateStogare(user: User) {
  window.localStorage.setItem(import.meta.env.VITE_KEY, JSON.stringify(user));
}

export const changeAvatar = createAsyncThunk(
  Path.ChangeAvatar,
  (avatar: File) => {
    const form = new FormData();
    form.append(avatar.name, avatar);
    const response = instance.post<User>(Path.ChangeAvatar, form);
    return response;
  }
);

export const changeCoverPicture = createAsyncThunk(
  Path.ChangeCoverPicture,
  (avatar: File) => {
    const form = new FormData();
    form.append(avatar.name, avatar);
    const response = instance.post<User>(Path.ChangeCoverPicture, form);
    return response;
  }
);

export const signupRequest = createAsyncThunk(Path.Signup, (signup: Signup) => {
  const response = instance.post<User>(Path.Signup, signup);
  return response;
});

export const confirmCodeRequest = createAsyncThunk(
  "confirmCodeRequest",
  (code: Code) => {
    const user = fromStogare();
    const response = instance.post<User>("/Auth/Code", {
      ...code,
      userId: user?.id,
    });
    return response;
  }
);

export const loginRequest = createAsyncThunk("loginRequest", (login: Login) => {
  const response = instance.post<User>("/Auth/Signin", login);
  return response;
});

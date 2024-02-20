import { Message } from "../../../Shared/Message";
import { Redirect } from "../../../Shared/Redirect";
import { ContextHandle } from "../../../UI/Context/Context";
import { store } from "../../Store";
import { mainSlice } from "../Main/Main";
import { Stogare } from "./Model";
import { removeStogareRequest, stogareRequest } from "./Thunk";

export enum ContextMode {
  Folder = 0,
  File = 1,
}

export const contexts: { [key: number]: (item: Stogare) => ContextHandle[] } = {
  [ContextMode.Folder]: (item: Stogare) => [
    {
      name: "Remove",
      cb: () =>
        store.dispatch(removeStogareRequest(item.id)).then(function () {
          store.dispatch(stogareRequest(item.parent));
        }),
    },
    {
      name: "Move",
      cb: () => (window.location.href = `../${Redirect.MOVE}/${item.id}`),
    },
    {
      name: "Rename",
      cb: () =>
        store.dispatch(removeStogareRequest(item.id)).then(function () {
          store.dispatch(stogareRequest(item.parent));
        }),
    },
  ],
  [ContextMode.File]: (item: Stogare) => [
    {
      name: "Remove",
      cb: () =>
        store.dispatch(removeStogareRequest(item.id)).then(function () {
          store.dispatch(stogareRequest(item.parent));
        }),
    },
    {
      name: "Download",
      cb: () => window.open(item.url),
    },
    {
      name: "Copy URL",
      cb: () => {
        navigator.clipboard.writeText(item.url);
        store.dispatch(mainSlice.actions.alert(Message.COPY_URL_SUCESS));
      },
    },
    {
      name: "Move",
      cb: () => (window.location.href = `../${Redirect.MOVE}/${item.id}`),
    },
    {
      name: "Rename",
      cb: () => {
        navigator.clipboard.writeText(item.url);
        store.dispatch(mainSlice.actions.alert(Message.COPY_URL_SUCESS));
      },
    },
  ],
};

import { User } from "../Identity/Model";

export interface MainState {
  alerts: string[];
  identity: User | null;
  confirm: IConfirm | null;
  loading: ILoading | null;
}

export interface ILoading {
  content?: string;
}

export interface IConfirm {
  content?: string;
  cb: () => void;
}

export class InitConnection {
  constructor(userId: string) {
    this.userId = userId;
  }
  userId: string;
}

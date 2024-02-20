import { ContextHandle } from "../../../UI/Context/Context";
import { User } from "../Identity/Model";

export interface StogareState {
  current: number;
  home: Home;
  stogares: Stogare[];
  groups: Group[];
  context: ContextHandle[];
  destination: Stogare[];
}

export interface Stogare {
  id: number;
  counter: number;
  size: number;
  parent: number;
  created: string;
  mapName: string;
  displayName: string;
  status: number;
  type: number;
  url: string;
  thumbnail: string;
  counterSize: number;
  groupId: number;
  userId: number;
}

export class Home {
  setting: Settings = new Settings();
  totalFile: number = 0;
  counter: Counter[] = [];
  totalSize: number = 0;
}

interface Counter {
  name: string;
  quanlity: number;
  size: number;
  percent: number;
}

class Settings {
  maxSize: number = 0;
}

export interface Group {
  id: number;
  name: string;
  dataGroups: Stogare[];
  user: User;
  members: Member[];
}

interface Member {
  groupId: number;
  userId: number;
  user: User;
}

export interface CreateFolder {
  name: string;
  parent: number;
}

export interface UploadFile {
  stogareId: number;
  form: FormData;
}

export interface Rename {
  stogareId: number;
  name: string;
}

export interface Move {
  stogareId: number;
  destinationId: number;
}

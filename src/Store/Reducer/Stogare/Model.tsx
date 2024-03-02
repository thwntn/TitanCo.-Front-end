import { ContextHandle } from "../../../UI/Context/Context";
import { User } from "../Identity/Model";

export interface StogareState {
  current: string;
  home: Home;
  stogares: Stogare[];
  groups: Group[];
  context: ContextHandle[];
  destination: Stogare[];
}

export interface Stogare {
  id: string;
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
  id: string;
  name: string;
  image: string;
  dataGroups: Stogare[];
  profile: User;
  members: Member[];
}

interface Member {
  groupId: number;
  profileId: number;
  profile: User;
  status: number;
}

export interface CreateFolder {
  name: string;
  parent: string;
}

export interface UploadFile {
  stogareId: string;
  form: FormData;
}

export interface Rename {
  stogareId: string;
  name: string;
}

export interface Move {
  stogareId: string;
  destinationId: string;
}

import { Group } from "../Stogare/Model";

export interface GroupState {
  list: Group[];
  select: Group | null;
}

export interface Create {
  groupName: string;
}

export interface AddMember {
  emails: string[];
  groupId: string;
}

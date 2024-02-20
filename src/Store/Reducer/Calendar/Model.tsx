export interface PlanningState {
  plannings: Planning[];
  currentTime: Date;
  selected: string | null;
  create: CreatePlanning | null;
}

export interface Planning {
  id: number;
  created: string;
  weekOfYear: number;
  name: string;
  hour: string;
  from: string;
  to: string;
  color: string;
  day: string;
}

export interface CreatePlanning {
  weekOfYear: number;
  name?: string;
  dateTime: string;
  hour: number;
  from?: string;
  to?: string;
  color?: string;
  day: string;
  setNotification: boolean;
  setEmail: boolean;
}

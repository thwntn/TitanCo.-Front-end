export interface Item {
  name: string;
  path?: string;
  icon: string;
  children?: Item[];
}

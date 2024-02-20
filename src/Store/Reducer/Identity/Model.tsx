export interface Login {
  username?: string;
  password?: string;
}

export interface Signup {
  username?: string;
  password?: string;
  name?: string;
}

export interface Code {
  userId?: string;
  code?: string;
}

export interface Local extends Signup, Login, Code {}

export interface IdentityState {
  user: User | null;
  localObject: Local | {};
}

export interface User {
  id: string;
  avatar: string;
  email: string;
  token: string;
  coverPicture: string;
  name: string;
  status: number;
}

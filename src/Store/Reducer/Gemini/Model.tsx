import { Owner } from "./Gemini";

export interface GeminiState {
  messages: Content[];
}

export interface Content {
  text: string;
  owner: Owner;
}

export interface Message {
  text: string;
}

import { Session } from "./session.interface";

export interface Room {
    name:     string;
    sessions: Session[];
}
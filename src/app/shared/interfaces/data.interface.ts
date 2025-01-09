import { SessionType } from "./sessaoType.interface";

export interface Data {
    sessionTypes:  SessionType[];
    date:          Date;
    dateFormatted: string;
    dayOfWeek:     string;
    isToday:       boolean;
}
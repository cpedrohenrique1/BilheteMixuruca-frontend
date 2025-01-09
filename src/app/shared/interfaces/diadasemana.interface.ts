import { Theater } from "./theater.interface";

export interface  DiaDaSemana{
    theaters:      Theater[];
    date:          string;
    dateFormatted: string;
    dayOfWeek:     string;
    isToday:       boolean;
}
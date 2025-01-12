import { DateClass } from "./dateClass.interface";
import { TypeClass } from "./typeclass.interface";

export interface Session {
    id:               string;
    boxOfficeId:      string;
    eventBoxOfficeId: string;
    price:            number;
    room:             string;
    type:             string[];
    types:            TypeClass[];
    date:             DateClass;
    realDate:         DateClass;
    time:             string;
    defaultSector:    string;
    siteURL:          string;
    enabled:          boolean;
}
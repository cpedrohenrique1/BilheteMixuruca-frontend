import { Room } from "./room.interface";

export interface Theater {
    id:                string;
    boxOfficeId:       string;
    name:              string;
    urlKey:            string;
    siteURL:           string;
    rooms:             Room[];
}
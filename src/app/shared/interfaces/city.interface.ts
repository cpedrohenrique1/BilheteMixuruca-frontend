import { TimeZone } from "./timezone.interface";

export interface City {
    id:       string;
    name:     string;
    uf:       string;
    state:    string;
    urlKey:   string;
    timeZone: TimeZone;
}
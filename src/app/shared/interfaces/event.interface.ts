import { Image } from "./image.interface";

export interface Event {
    id:                string;
    title:             string;
    originalTitle:     string;
    countryOrigin:     string;
    priority:          number;
    contentRating:     string;
    duration:          string;
    synopsis:          string;
    urlKey:            string;
    siteURL:           string;
    images:            Image[];
}
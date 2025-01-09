import { Event } from "./event.interface";

export interface Filme {
    id:               string;
    name:             string;
    carouselSlug:     string;
    priority:         number;
    type:             string;
    hasLink:          boolean;
    displayOnCatalog: boolean;
    seeMorePageUrl:   null;
    events:           Event[];
    items:            any[];
}
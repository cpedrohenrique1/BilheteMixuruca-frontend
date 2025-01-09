import { City } from "./city.interface";
import { Image } from "./image.interface";

export interface Event {
    id:                string;
    title:             string;
    originalTitle:     string;
    movieIdUrl:        string;
    ancineId:          string;
    countryOrigin:     string;
    priority:          number;
    contentRating:     string;
    duration:          string;
    rating:            number;
    synopsis:          string;
    cast:              string;
    director:          string;
    directors:         string;
    imageFeatured:     null;
    distributor:       string;
    inPreSale:         boolean;
    isReexhibition:    boolean;
    urlKey:            string;
    isPlaying:         boolean;
    countIsPlaying:    number;
    creationDate:      Date;
    city:              City;
    siteURL:           string;
    nationalSiteURL:   string;
    images:            Image[];
    genres:            string[];
    ratingDescriptors: string[];
    accessibilityHubs: any[];
    completeTags:      any[];
    tags:              any[];
    partnershipType:   null;
}
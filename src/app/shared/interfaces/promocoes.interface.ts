import { Item } from "./item.interface";

export interface Promocoes {
  id:               string;
  name:             string;
  carouselSlug:     string;
  priority:         number;
  type:             string;
  hasLink:          boolean;
  displayOnCatalog: boolean;
  seeMorePageUrl:   null;
  events:           any[];
  items:            Item[];
}

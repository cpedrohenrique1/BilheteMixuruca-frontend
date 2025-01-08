import { City } from "./city.interface";

export interface State {
    name:   string;
    uf:     string;
    cities: City[];
}

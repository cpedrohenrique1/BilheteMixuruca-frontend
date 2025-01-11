export interface  Price{
    default: Default[];
}

export interface Default {
    id:                      string;
    name:                    string;
    price:                   number;
    image?:                  string;
}
export interface IData {
    offers: IOffer[];
}
export interface ILocation {
    lat: number;
    lng: number;
    name: string;
}

export interface IDetails {
    apartmentType: string;
    apartmentTypeTitle: string;
    bedroomsCount: number;
    guestsCount: number;
    name: string;
}
export interface IProvider {
    id: string;
    legalName: string;
    logoUrl: string;
    shortName: string;
}
export interface IRating {
    count: number;
    value: number;
}

export interface IPrice {
    ccy: string;
    currency: string;
    daily: number;
    nights: number;
    total: number;
}
export interface IOffer {
    id: string;
    photos: IPhoto[];
    detailsLink: string;
    price: IPrice;
    rating: IRating;
    provider: IProvider;
    details: IDetails;
    location: ILocation;
}
export interface IPhoto {
    hr: string;
    l: string;
    m: string;
    t: string;
}

interface IExtendedDetails extends IDetails {
    description: string;
}

export interface IExtendedOffer extends IOffer {
    details: IExtendedDetails;
}

export interface IOption {
    value: string;
}

export interface data {
    offers: offer[];
}

interface offer {
    id: string;
    photos: photo[];
    detailsLink: string; // holidu.com + ...
    price: {
        ccy: string; // EUR
        currency: string; // EUR
        daily: number;
        nights: number;
        total: number; // nights * daily
    };
    rating: {
        count: number; // (count reviews)
        value: number; // 5/100*value => stars
    };
    provider: {
        id: string;
        legalName: string;
        logoUrl: string;
        shortName: string;
    };
    details: {
        apartmentType: string;
        apartmentTypeTitle: string;
        bedroomsCount: number;
        guestsCount: number;
        name: string;
        location: {
            lat: number;
            lng: number;
            name: string;
        };
    };
}

interface photo {
    hr: string;
    l: string;
    m: string;
    t: string;
}

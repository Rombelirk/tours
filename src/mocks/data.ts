
import { IData } from '../interfaces/data'
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
export const mockData: IData = {
    offers: [
        {
            id: "1",
            detailsLink: "",
            rating: {
                count: 0, // (count reviews)
                value: 0, // 5/100*value => stars
            },
            photos: [{
                hr: img2,
                l: img2,
                m: img2,
                t: img2,
            }],
            price: {
                ccy: "EUR", // EUR
                currency: "EUR", // EUR
                daily: 15,
                nights: 6,
                total: 60, // nights * daily
            },

            provider: {
                id: "",
                legalName: "",
                logoUrl: "",
                shortName: "",
            },
            details: {
                apartmentType: "",
                apartmentTypeTitle: "",
                bedroomsCount: 0,
                guestsCount: 0,
                name: "",
                location: {
                    lat: 0,
                    lng: 0,
                    name: ""
                }

            },

        },
        {
            id: "2",
            detailsLink: "",
            rating: {
                count: 0, // (count reviews)
                value: 0, // 5/100*value => stars
            },
            photos: [{
                hr: img1,
                l: img1,
                m: img1,
                t: img1,
            }],
            price: {
                ccy: "", // EUR
                currency: "", // EUR
                daily: 0,
                nights: 0,
                total: 0, // nights * daily
            },

            provider: {
                id: "",
                legalName: "",
                logoUrl: "",
                shortName: "",
            },
            details: {
                apartmentType: "",
                apartmentTypeTitle: "",
                bedroomsCount: 0,
                guestsCount: 0,
                name: "",
                location: {
                    lat: 0,
                    lng: 0,
                    name: ""
                }

            },

        }
    ]
}
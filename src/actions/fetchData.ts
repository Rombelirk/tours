import {
    FETCH_DATA, FETCH_OFFER, FETCH_OPTIONS, STORE_DATA, STORE_OFFER, STORE_OPTIONS,
} from '../action_types/action_types';

export const fetchData = (searchTerm: string) => {
    return { type: FETCH_DATA, searchTerm };
};
export const fetchOffer = (id: string) => {

    return { type: FETCH_OFFER, id };
};
export const storeData = (data) => {
    return {
        type: STORE_DATA,
        data,
    };
};

export const storeOffer = (offer) => {
    return {
        type: STORE_OFFER,
        offer,
    };
};

export const storeOptions = (options) => {
    return {
        type: STORE_OPTIONS,
        options,
    };
};




export const fetchOptions = (string) => {

    return {
        type: FETCH_OPTIONS,
        string,
    };
};




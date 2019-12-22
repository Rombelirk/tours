import { STORE_DATA, STORE_OFFER, STORE_OPTIONS } from '../action_types/action_types';

const defaultState = {
    data: {
        offers: [],
    },
    currentOffer: null,
    options: [],
};
export default (state = defaultState, action) => {
    const { type, data, offer, options } = action;
    console.log(type, 'type');
    switch (type) {
        case STORE_DATA:
            return { ...state, data };
        case STORE_OFFER:
            return { ...state, currentOffer: offer };
        case STORE_OPTIONS:
            return { ...state, options };
        default:
            return state;
    }
};

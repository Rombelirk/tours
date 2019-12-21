import { STORE_DATA, FETCH_DATA } from '../action_types/action_types';
const defaultState = {
    data: {
        offers: [],
    },
};
export default (state = defaultState, action) => {
    const { type, data } = action;
    console.log(type, 'type');
    switch (type) {
        case STORE_DATA:
            return { ...state, data };
        default:
            return state;
    }
};

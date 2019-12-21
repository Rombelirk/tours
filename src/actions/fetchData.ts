import { FETCH_DATA, STORE_DATA } from '../action_types/action_types';

export const fetchData = (searchTerm: string) => {
    return { type: FETCH_DATA, searchTerm };
};
export const storeData = (data) => {
    return {
        type: STORE_DATA,
        data,
    };
};

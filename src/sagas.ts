import { takeLatest, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { storeData, storeOffer, storeOptions } from './actions/fetchData';
import { FETCH_DATA, FETCH_OFFER, FETCH_OPTIONS } from './action_types/action_types';
import { mockData } from './mocks/data';

function* fetchOffers(action) {
    const { searchTerm } = action;
    try {
        const data = yield axios.get('https://api.holidu.com/rest/v6/search/offers', { params: { searchTerm } });
        yield put(storeData(data.data));
    } catch (e) {
        console.log('error', e);
        yield put(storeData(mockData));
    }
}

function* fetchOffer(action) {
    const { id } = action;
    try {
        const data = yield axios.get(`https://api.holidu.com/rest/v6/search/offers/${id}`);
        yield put(storeOffer(data.data));
    } catch (e) {
        console.log('error', e);
        yield put(storeOffer(mockData));
    }
}

function* fetchOptions(action) {

    const { string } = action;
    try {
        const data = yield axios.get(`https://api.holidu.com/rest/v6/search/autocomplete/${string}`);

        yield put(storeOptions(data.data.items));
    } catch (e) {
        console.log('error', e);

    }
}



export default function* mySaga() {
    yield takeEvery(FETCH_DATA, (fetchOffers));
    yield takeEvery(FETCH_OFFER, fetchOffer);
    yield takeEvery(FETCH_OPTIONS, fetchOptions)
}
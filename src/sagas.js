import { takeLatest, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import { storeData } from './actions/fetchData';
import { FETCH_DATA } from './action_types/action_types';
import { mockData } from './mocks/data';

function* fetchData(action) {
    const { searchTerm } = action;
    console.log('here', searchTerm);
    try {
        const data = yield axios.get('https://api.holidu.com/rest/v6/search/offers', { params: { searchTerm } });
        yield put(storeData(data.data));
    } catch (e) {
        console.log('error', e);
        yield put(storeData(mockData));
    }
}

export default function* mySaga() {
    console.log('there');
    yield takeEvery(FETCH_DATA, fetchData);
}

import { takeEvery } from 'redux-saga/effects';

import { GET_PROFILE_DATA } from '../actions/rementis'

function* fetchProfileData(action) {
    console.log('TODO: fetch data from api', action);
    yield;
};

export default function* rootSaga() {
    yield takeEvery(GET_PROFILE_DATA, fetchProfileData);
}; 
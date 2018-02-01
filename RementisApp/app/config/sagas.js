import { takeEvery, call, put } from "redux-saga/effects";

import { GET_PROFILE_DATA, PROFILE_DATA, GET_PROFILE_DATA_ERROR } from "../actions/rementis";

export const getProfileData = () => fetch(`http://rementisapi.azurewebsites.net/api/profile`);

function* fetchProfileData(action) {
  try {
    const response = yield call(getProfileData);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: GET_PROFILE_DATA_ERROR, error: result.error });
    } else {
      yield put({ type: PROFILE_DATA, result });
    }
  } catch (error) {
    yield put({ type: GET_PROFILE_DATA_ERROR, error: error.message });
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_PROFILE_DATA, fetchProfileData);
}

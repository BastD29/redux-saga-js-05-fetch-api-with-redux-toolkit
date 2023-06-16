import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
// import { fetchData, fetchDataFailure, fetchDataSuccess } from "./actions";
import { fetchData, fetchDataSuccess, fetchDataFailure } from "./reducer";

function* fetchDataSaga() {
  try {
    const response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/todos"
    );

    const jsonResponse = yield response.json();

    yield put(fetchDataSuccess(jsonResponse));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchData.type, fetchDataSaga);
}

// we do not need any watcher as we use takeLatest
// it is the equivalent of doing:

// function* watchFetchDataSaga() {
//   yield takeEvery(fetchData.type, fetchDataSaga);
// }

// export default function* rootSaga(){
//     yield watchFetchDataSaga();
// }

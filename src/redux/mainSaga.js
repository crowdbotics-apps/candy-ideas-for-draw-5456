import { all, takeEvery, take } from "redux-saga/effects";

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga)
    // other sagas go here
  ]);
}

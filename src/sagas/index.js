// Sagas 
import { all } from 'redux-saga/effects';

export function* sagaIsRunning() { 
    alert("Saga is running");
}

export default function* rootSaga() {
    yield all([
        sagaIsRunning(),
    ])
}
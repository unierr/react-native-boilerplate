import { compose, createStore, applyMiddleware } from 'redux'; // Import { compose, createStore, applyMiddleware } from redux
import createSagaMiddleware from 'redux-saga';  // Import createSagaMiddleware from Redux-saga
import rootReducers from "../reducers"; // Import Reducers

// Create Store & sagaMiddleware ...
export const sagaMiddleware = createSagaMiddleware();
export const configureStore = (initialState)=>{
    const store = createStore(
        rootReducers,
        initialState,
        compose(
            applyMiddleware(sagaMiddleware)
        )
    )
    return store; 
}
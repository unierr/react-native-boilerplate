// Reducers
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    dummyReducer: (state = [], action) => {
        return state;
    }
})

export default rootReducers;
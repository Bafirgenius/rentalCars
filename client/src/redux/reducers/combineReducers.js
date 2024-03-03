import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { RESET_STORE } from "../constanst"
import { carsReducer } from './carsReducer'
import { alertReducer } from "./alertReducer"

const rootReducer = combineReducers({
    carsReducer,
    alertReducer
})

export const reducers = (state, action) => {
    if (action.type === RESET_STORE) {
        // for all keys defined in your persistConfig(s)
        storage.removeItem('persist:root');
        localStorage.clear();
        // storage.removeItem('persist:otherKey')
        state = undefined;
    }
    return rootReducer(state, action);
};
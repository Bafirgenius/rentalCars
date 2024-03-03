import { legacy_createStore as createStore, applyMiddleware, compose } from "redux"
import { thunk } from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { reducers } from './combineReducers'
const persistedReducer = persistReducer(
    {
        key: 'root',
        storage,
        blacklist: []
    },
    reducers
)

export const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export const persistor = persistStore(store)
import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from "redux-thunk";
import { reducer as ThemeReducer } from '../ThemeReducer/reducer';

const rootReducer = combineReducers({
    ThemeReducer

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
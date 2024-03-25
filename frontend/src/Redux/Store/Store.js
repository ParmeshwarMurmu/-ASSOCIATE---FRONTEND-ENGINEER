import { legacy_createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from "redux-thunk";
import { reducer as ThemeReducer } from '../ThemeReducer/reducer';
import { reducer as AllListMailReducer } from '../AllListMailReducer/reducer'

const rootReducer = combineReducers({
    ThemeReducer,
    AllListMailReducer

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import UsersSlice from './users/UsersSlice';

// initial state defined with redux store as default value
const initialState = {

}

// all reducers
const combineReducers ={
    users: UsersSlice.reducer
}

export const Store = configureStore({
    reducer: combineReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState
})

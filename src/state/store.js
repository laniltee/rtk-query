import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import * as reducers from './reducers'
import apiReducers, { apiMiddleware } from '../api'

export const rootReducer = combineReducers({ ...reducers, ...apiReducers })

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
})

export default store

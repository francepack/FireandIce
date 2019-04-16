import { combineReducers } from 'redux'
import { data } from './data'
import { isLoading } from './isLoading'

export const rootReducer = combineReducers({
  data,
  isLoading
})
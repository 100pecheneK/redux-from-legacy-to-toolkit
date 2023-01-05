import { combineReducers } from 'redux'
import { filtersReducer } from './filters'
import { positionsReducer } from './positions'

export const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filtersReducer,
})

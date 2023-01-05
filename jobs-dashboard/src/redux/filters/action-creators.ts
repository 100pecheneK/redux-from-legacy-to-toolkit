import { FilterType } from './@types'
import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from './types'

export const addFilter = (filter: FilterType) => ({
  type: ADD_FILTER,
  payload: filter,
})
export const removeFilter = (filter: FilterType) => ({
  type: REMOVE_FILTER,
  payload: filter,
})
export const clearFilters = () => ({
  type: CLEAR_FILTERS,
})

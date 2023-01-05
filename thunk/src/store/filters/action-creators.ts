import { FilterTypes } from './@types'
import { SET_FILTER } from './types'

export const setFilter = (filter: FilterTypes) => ({
  type: SET_FILTER,
  payload: filter,
})

import { FilterActionTypes, FilterTypes } from './@types'

const initialState: FilterTypes = 'all'
export const filter = (state = initialState, action: FilterActionTypes) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}

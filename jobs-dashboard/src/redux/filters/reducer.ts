import { FiltersActionTypes, FilterType } from './@types'

export const filtersReducer = (
  state: FilterType[] = [],
  action: FiltersActionTypes
) => {
  switch (action.type) {
    case 'ADD_FILTER':
      if (state.includes(action.payload)) return state
      return [...state, action.payload]
    case 'REMOVE_FILTER':
      return state.filter(filter => filter !== action.payload)
    case 'CLEAR_FILTERS':
      return []
    default:
      return state
  }
}

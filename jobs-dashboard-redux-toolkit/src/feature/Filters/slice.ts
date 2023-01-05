import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterType } from '../../oldredux/filters/@types'

const initialState: FilterType[] = []
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<FilterType>) => {
      state.push(action.payload)
    },
    removeFilter: (state, action: PayloadAction<FilterType>) => {
      return state.filter(f => f !== action.payload)
    },
    clearFilters: () => {
      return initialState
    },
  },
})

export default filterSlice.reducer
export const { addFilter, clearFilters, removeFilter } = filterSlice.actions

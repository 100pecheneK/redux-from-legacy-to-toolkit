import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { reset } from '../Reset/reset-action'
import { FilterTypes } from './types'

type FilterInitialState = {
  type: FilterTypes
}

const initialState: FilterInitialState = {
  type: 'all',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterTypes>) => {
      state.type = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(reset, () => {
      return initialState
    })
  },
})

export const { setFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { reset } from '../Reset/reset-action'
import { FilterTypes } from './types'

const initialState: FilterTypes = 'all'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilter: (_, action) => {
      return action.payload
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

import { createSlice } from '@reduxjs/toolkit'
import { JobPositionType } from './types'

const initialState: JobPositionType[] = []

const joblist = createSlice({
  name: 'joblist',
  initialState,
  reducers: {
    addPositions: (state, action) => {
      return action.payload
    },
  },
})

export default joblist.reducer
export const { addPositions } = joblist.actions

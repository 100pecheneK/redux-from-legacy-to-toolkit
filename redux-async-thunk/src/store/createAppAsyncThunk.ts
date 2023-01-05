import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState, AppDispatch, ApiType } from './types'
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: string
  extra: ApiType
}>()

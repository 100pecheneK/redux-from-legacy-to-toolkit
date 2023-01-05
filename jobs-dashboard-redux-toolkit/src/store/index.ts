import { configureStore } from '@reduxjs/toolkit'
import { filtersReducer } from '../feature/Filters'
import { joblistReducer } from '../feature/JobList'

const rootReducer = { joblist: joblistReducer, filters: filtersReducer }

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export default store

import filtersReducer, { addFilter, clearFilters, removeFilter } from './slice'
import * as filtersSelectors from './selectors'

const filtersActions = {
  addFilter,
  clearFilters,
  removeFilter,
}

export { filtersReducer, filtersActions, filtersSelectors }

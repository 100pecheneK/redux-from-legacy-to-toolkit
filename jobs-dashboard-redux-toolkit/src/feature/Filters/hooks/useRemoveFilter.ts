import { filtersActions } from '..'
import { useTypedDispatch } from '../../../store/hooks'
import { FilterType } from '../types'

export const useRemoveFilter = () => {
  const distpatch = useTypedDispatch()
  function removeFilter(filter: FilterType) {
    distpatch(filtersActions.removeFilter(filter))
  }
  function clearFilters() {
    distpatch(filtersActions.clearFilters())
  }
  return { removeFilter, clearFilters }
}

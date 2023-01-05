import { filtersActions } from '..'
import { useTypedDispatch } from '../../../store/hooks'
import { FilterType } from '../types'

export const useAddFilter = () => {
  const distpatch = useTypedDispatch()
  function addFilter(filter: FilterType) {
    distpatch(filtersActions.addFilter(filter))
  }
  return addFilter
}

import { joblistSelectors } from '..'
import { useTypedSelector } from '../../../store/hooks'
import { filtersSelectors } from '../../Filters'

import { useFetchJoblist } from './useFetchJoblist'

export const useJoblist = () => {
  useFetchJoblist()
  const filters = useTypedSelector(filtersSelectors.selectFilters)
  const joblist = useTypedSelector(state =>
    joblistSelectors.selectVisiblePositions(state, filters)
  )
  return joblist
}

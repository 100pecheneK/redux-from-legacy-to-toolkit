import { filtersActionCreators, filtersSelectors } from '../redux/filters'
import { FilterType } from '../redux/filters/@types'
import { useTypedDispatch, useTypedSelector } from '../redux/hooks'
import { positionsSelectors } from '../redux/positions'
import { JobPosition } from './JobPosition'

const JobList = () => {
  const filters = useTypedSelector(filtersSelectors.selectFilters)
  const positions = useTypedSelector(state =>
    positionsSelectors.selectVisiblePositions(state, filters)
  )
  const distpatch = useTypedDispatch()
  function addFilter(filter: FilterType) {
    distpatch(filtersActionCreators.addFilter(filter))
  }
  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition onAddFilter={addFilter} key={item.id} {...item} />
      ))}
    </div>
  )
}

export { JobList }

import { filtersActionCreators, filtersSelectors } from '../redux/filters'
import { FilterType } from '../redux/filters/@types'
import { useTypedDispatch, useTypedSelector } from '../redux/hooks'
import { Badge } from '../UI/Badge'
import { Card } from '../UI/Card'
import { Stack } from '../UI/Stack'

const FilterPanel = () => {
  const filters = useTypedSelector(filtersSelectors.selectFilters)
  const distpatch = useTypedDispatch()
  function removeFilter(filter: FilterType) {
    distpatch(filtersActionCreators.removeFilter(filter))
  }
  function clearFilters() {
    distpatch(filtersActionCreators.clearFilters())
  }
  if (filters.length === 0) return null
  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {filters.map(filter => (
            <Badge
              key={filter}
              onClear={() => removeFilter(filter)}
              variant='clearable'
            >
              {filter}
            </Badge>
          ))}
        </Stack>
        <button className='link' onClick={clearFilters}>
          Clear
        </button>
      </div>
    </Card>
  )
}

export { FilterPanel }

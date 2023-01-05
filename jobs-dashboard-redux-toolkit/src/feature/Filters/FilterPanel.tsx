import { filtersSelectors } from '.'
import { useTypedSelector } from '../../store/hooks'
import { Badge } from '../../UI/Badge'
import { Card } from '../../UI/Card'
import { Stack } from '../../UI/Stack'
import { useRemoveFilter } from './hooks/useRemoveFilter'

export const FilterPanel = () => {
  const filters = useTypedSelector(filtersSelectors.selectFilters)
  const { removeFilter, clearFilters } = useRemoveFilter()
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

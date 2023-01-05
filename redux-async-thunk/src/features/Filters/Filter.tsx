import Select from '../../components/Select'
import { useTypedDispatch, useTypedSelector } from '../../store/store'
import { setFilter } from './filter-slice'
import { FilterTypes } from './types'

type OptionType = {
  value: FilterTypes
  text: string
}
const options: OptionType[] = [
  { value: 'all', text: 'All' },
  { value: 'active', text: 'Active' },
  { value: 'done', text: 'Done' },
]

export type FilterParamsType = { filter: FilterTypes }
export default function Filters() {
  const filter = useTypedSelector(state => state.filters.type)
  const dispatch = useTypedDispatch()
  function onChange(value: FilterTypes) {
    dispatch(setFilter(value))
  }
  return <Select options={options} onChange={onChange} value={filter} />
}

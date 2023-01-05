import { useNavigate, useParams, useRoutes } from 'react-router-dom'
import Select from '../components/Select'
import { FilterTypes } from '../store/filters/@types'

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
  const { filter = 'all' } = useParams<FilterParamsType>()
  const navigate = useNavigate()

  function onChange(value: FilterTypes) {
    navigate(`/${value}`)
  }
  return <Select options={options} onChange={onChange} defaultValue={filter} />
}

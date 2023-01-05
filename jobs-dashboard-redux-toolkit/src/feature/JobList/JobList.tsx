import { JobPosition } from '../../components/JobPosition'
import { useAddFilter } from '../Filters/hooks/useAddFilter'
import { useJoblist } from './hooks/useJoblist'

const JobList = () => {
  const joblist = useJoblist()
  const addFilter = useAddFilter()
  return (
    <div className='job-list'>
      {joblist.map(item => (
        <JobPosition onAddFilter={addFilter} key={item.id} {...item} />
      ))}
    </div>
  )
}

export { JobList }

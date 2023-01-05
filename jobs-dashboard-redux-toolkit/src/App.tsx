import { FilterPanel } from './feature/Filters/FilterPanel'
import { JobList } from './feature/JobList/JobList'
import { TheHeader } from './components/TheHeader'

export default function App() {
  return (
    <>
      <TheHeader />
      <div className='container'>
        <FilterPanel />
        <JobList />
      </div>
    </>
  )
}

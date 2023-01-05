import { useEffect } from 'react'
import { FilterPanel } from './components/FilterPanel'
import { JobList } from './components/JobList'
import { TheHeader } from './components/TheHeader'
import { useTypedDispatch } from './redux/hooks'
import { positionsActionCreators } from './redux/positions'
import data from './mock/data.json'

export default function App() {
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(positionsActionCreators.addPositions(data))
  }, [])
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

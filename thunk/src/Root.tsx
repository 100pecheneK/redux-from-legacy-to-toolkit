import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { RootStore } from './store'

type RootProps = {
  store: RootStore
}
export function Root({ store }: RootProps) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path=':filter' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { RootStore } from './store/types'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store/store'
type RootProps = { store: RootStore }
export function Root({ store }: RootProps) {
	return (
		<Provider store={store}>
			<PersistGate loading={<span>loading</span>} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<App />} />
						{/* <Route path=':filter' element={<App />} /> */}
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	)
}

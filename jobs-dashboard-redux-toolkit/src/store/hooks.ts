import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import { RootDispatch, RootState } from './types'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch: () => RootDispatch = useDispatch

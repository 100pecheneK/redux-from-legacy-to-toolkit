import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { DispatchFunctionType } from '../store/@types'

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch: () => DispatchFunctionType = useDispatch

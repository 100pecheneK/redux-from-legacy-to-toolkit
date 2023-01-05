export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never

export type getActionTypes<T extends { [key: string]: any }> = ReturnType<
  InferValueTypes<T>
>
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: () => any
  }
}

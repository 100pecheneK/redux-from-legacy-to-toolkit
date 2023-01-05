export type InferValueTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never

export type getActionTypes<T extends { [key: string]: any }> = ReturnType<
  InferValueTypes<T>
>

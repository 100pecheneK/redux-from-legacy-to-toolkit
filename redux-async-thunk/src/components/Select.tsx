import { useEffect, useState } from 'react'

type Option<T> = {
  value: T
  text: string
}
type SelectProps<T extends string> = {
  options: Option<T>[]
  value: T
  onChange: (value: T) => void
}
export default function Select<T extends string>({
  options,
  value,
  onChange,
}: SelectProps<T>) {
  // const [value, setValue] = useState(defaultValue || '')
  function _onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    // setValue(e.target.value)
    onChange(e.target.value as T)
  }
  return (
    <select name='filter' id='filter' onChange={_onChange} value={value}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
}

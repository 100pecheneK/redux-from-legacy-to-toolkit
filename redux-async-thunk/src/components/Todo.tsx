type TodoProps = {
  title: string
  completed: boolean
  onDelete: () => void
  onToggle: () => void
}
export function Todo({ title, completed, onDelete, onToggle }: TodoProps) {
  return (
    <li>
      <button onClick={onDelete}>&times;</button>
      <input type='checkbox' checked={completed} onChange={onToggle} />
      {title}
    </li>
  )
}

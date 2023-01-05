type TodoProps = {
  title: string
  complited: boolean
  onDelete: () => void
  onToggle: () => void
}
export function Todo({ title, complited, onDelete, onToggle }: TodoProps) {
  return (
    <li>
      <input type='checkbox' checked={complited} onChange={onToggle} />
      {title}
      <button onClick={onDelete}>&times;</button>
    </li>
  )
}

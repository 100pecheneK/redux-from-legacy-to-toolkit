type CardTypes = {
  children: React.ReactNode
  isFeatured?: boolean
  className?: string
}
export const Card = ({ children, isFeatured, className }: CardTypes) => {
  return (
    <div
      className={`card${isFeatured ? ' card--featured' : ''}${
        className ? ' ' + className : ''
      }`}
    >
      {children}
    </div>
  )
}

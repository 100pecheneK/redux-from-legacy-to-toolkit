type BadgeProps = {
  variant?: 'basic' | 'clearable' | 'rounded'
  colorScheme?: 'light' | 'primary' | 'dark'
  children: React.ReactNode
  onClear?: () => void
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
export const Badge = ({
  variant = 'basic',
  colorScheme = 'light',
  children,
  onClear,
  onClick,
}: BadgeProps) => (
  <div
    className={`badge badge--${variant} badge--${colorScheme}`}
    onClick={onClick}
  >
    <span>{children}</span>
    {variant === 'clearable' && (
      <div className='badge-remover' onClick={onClear}>
        &times;
      </div>
    )}
  </div>
)

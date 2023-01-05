type StackProps = {
  children: React.ReactNode
  pos?: string
}
export const Stack = ({ children, pos }: StackProps) => (
  <div
    className='stack'
    style={{
      justifyContent: pos === 'center' ? 'center' : `flex-${pos}`,
    }}
  >
    {children}
  </div>
)

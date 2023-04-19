/** @jsxImportSource theme-ui */

type InnerProps = {
  className?: string
  children: React.ReactNode
}

const Inner = ({ className = ``, children }: InnerProps) => (
  <div sx={{ width: [`full`, `full`, `full`, `full`, `full`, `2/3`], textAlign: `left`, variant: `texts.bigger`  }} className={className}>
    {children}
  </div>
)

export default Inner
import { ParallaxLayer } from "@react-spring/parallax"

type ContentProps = {
  speed: number
  offset: number
  children: React.ReactNode
  className?: string
  factor?: number
}

const Content = ({ speed, offset, children, className = ``, factor = 1 }: ContentProps) => (
  <ParallaxLayer
    speed={speed}
    offset={offset}
    factor={factor}
    className={className}
  >
    {children}
  </ParallaxLayer>
)

export default Content

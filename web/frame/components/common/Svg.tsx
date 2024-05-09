interface SvgProps {
  name: string
  size?: number
  className?: string
  onClick?: () => void
}

export const Svg = (props: SvgProps) => {
  const { size = 16 } = props
  const mergeClassName = useClassnames(['sa', props.className])

  return (
    <svg className={mergeClassName} style={{ fontSize: `${size + 'px'}` }} aria-hidden="true" onClick={props.onClick}>
      <use xlinkHref={`#sa-${props.name}`}></use>
    </svg>
  )
}
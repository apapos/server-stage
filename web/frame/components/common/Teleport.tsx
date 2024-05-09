import type { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface TeleportProps extends PropsWithChildren {
  to?: HTMLElement | string
}

export const Teleport = (props: TeleportProps) => {
  const { to = document.body } = props
  const [targetElement, setTargetElement] = useState<TeleportProps['to']>(to)
  const isElement = useMemo(() => to instanceof HTMLElement, [to])
  useEffect(() => {
    if (isElement) {
      setTargetElement(to as HTMLElement)
    } else if (typeof to === 'string') {
      const el = document.querySelector(to)
      if (el) setTargetElement(el as HTMLElement)
    } else {
      throw Error('target must be a HTMLElement or a string')
    }
  }, [isElement, to])

  return (
    <>
      {createPortal(props.children, targetElement as HTMLElement)}
    </>
  )
}
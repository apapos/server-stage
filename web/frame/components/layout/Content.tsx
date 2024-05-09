import type { PropsWithChildren } from "react"

interface ContentProps extends PropsWithChildren {
  className?: string
}

export const Content = (props: ContentProps) => {
  const mergeClassName = useClassnames(['container-wrap', props.className])
  return (
    <main className={mergeClassName}>
      {props.children}
    </main>
  )
}
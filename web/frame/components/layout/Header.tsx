import { Logo, ThemeSwitch } from '@components/common'

interface HeaderProps {
  className?: string
  title?: JSX.Element
  extra?: JSX.Element | null
  tool?: JSX.Element | null
}

export const Header = (props: HeaderProps) => {
  const classsNamse = useClassnames('header-wrap', props.className)
  return (
    <header className={classsNamse}>
      <Logo></Logo>
      <div className="header-extra">
        {props.extra}
      </div>
      <div className="header-slot">
        {props.tool}
        <ThemeSwitch />
      </div>
    </header>
  )
}
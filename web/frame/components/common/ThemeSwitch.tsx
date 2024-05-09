import { useApp } from '@reducer'
import { Svg } from './Svg'

export const ThemeSwitch = () => {
  const { state: { theme }, dispatch } = useApp()

  const onThemeChange = () => {
    const str = theme === 'light' ? 'dark' : 'light'
    useCookie.set('theme', str)
    dispatch({
      type: 'change_theme', payload: {
        theme: str
      }
    })
  }

  return (
    <div className="theme-wrap cursor-pointer">
      <Svg name={theme} onClick={onThemeChange} />
    </div>
  )
}
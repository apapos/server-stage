import type { PropsWithChildren } from 'react'
import ToolSlot from './tool-slot'
import Logo from '@assets/favicon.svg'
import { useEnv } from '@hooks'
type HeaderProps = PropsWithChildren<{
  className?: string
}>

const HeaderBar = (props: HeaderProps) => {

  return (
    <>
      <div className={`m-header ${props.className ?? ''}`}>
        <div className="m-header_left">
          <div className="m-header_logo">
            <img src={Logo} />
            <h1>{useEnv().VITE_APP_TITLE}</h1>
          </div>
          {props.children}
        </div>
        <div className="m-header_extra">
          <ToolSlot></ToolSlot>
        </div>
      </div>
    </>
  )
}
export default HeaderBar

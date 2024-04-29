import { PropsWithChildren, useEffect } from "react"
import HeaderBar from '@component/header-bar'
import FooterBar from '@component/footer-bar'
import { useEnv } from "@hooks"

type PropsType = PropsWithChildren<{
  key?: string
}>

const layoutWrap = (props: PropsType) => {

  // 初始化设置title
  useEffect(() => {
    document.title = useEnv().VITE_APP_TITLE
  }, [])

  return (
    <>
      <HeaderBar></HeaderBar>
      <div className="m-content">
        {props.children}
      </div>
      <FooterBar></FooterBar>
    </>
  )
}
export default layoutWrap

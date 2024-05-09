import { Content, Header } from "@components/layout"
import { HeaderExtra, HeaderTool } from "./component"
import { Outlet, useNavigate, useLocation } from "react-router-dom"

const StageIndex = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const token = useCookie.get('token')
  const islogin = useMemo(() => location.pathname === '/stage/login', [location])

  // 是否已登录
  const pagerHandle = useCallback(() => {
    if (!token) {
      navigate('/stage/login')
    } else {
      navigate('/stage/workspace')
    }
  }, [navigate, token])

  useEffect(() => {
    pagerHandle()
  }, [pagerHandle])

  // header extra and tool
  const headerExtra = useMemo(() => {
    if (islogin) {
      return {}
    }
    return {
      extra: <HeaderExtra />,
      tool: <HeaderTool />
    }
  }, [islogin])

  const classNames = useMemo(() => islogin ? 'flex' : 'stage-wrap flex', [islogin])

  return (
    <div className="content">
      <Header {...headerExtra} />
      <Content className={classNames}>
        <Outlet />
      </Content>
    </div>
  )
}

export default StageIndex
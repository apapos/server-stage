import { RouteObject } from 'react-router-dom'
import HomeWrap from '@layout/home'
import WebWrap from '@layout/web'

const route: RouteObject[] = [
  {
    path: '/',
    element: <HomeWrap />
  },
  {
    path: '/web',
    element: <WebWrap />
  }
]
export default route

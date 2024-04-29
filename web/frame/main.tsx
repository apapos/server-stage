import ReactDOM from 'react-dom/client'
import Layout from './layout'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import routers from '@router'
import '@styles'

const GetRoutes = () => useRoutes(routers)

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Layout>
    <BrowserRouter>
      <GetRoutes></GetRoutes>
    </BrowserRouter>
  </Layout>
)

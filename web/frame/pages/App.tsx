import { Header, Content, NavBar } from '@components/layout'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='app-wrap content'>
      <Header tool={<NavBar />} />
      <Content>
        <Outlet />
      </Content>
    </div>
  )
}

export default App

import { NavLink } from "react-router-dom"

export const NavBar = () => {
  const navList = [
    {
      name: 'Road Map',
      path: '/road-map'
    },
    {
      name: 'About Us',
      path: '/about-us'
    },
  ]
  return (
    <nav className="home-nav">
      {
        navList.map((item, index) => {
          return (
            <NavLink className="home-nav__item" key={index} to={item.path}>{item.name}</NavLink>
          )
        })
      }
    </nav>
  )
}
import type { PropsWithChildren } from 'react'
import {
  MenuList,
  MenuItem,
} from "@fluentui/react-components";
import { NavLink } from 'react-router-dom'

interface ContentMenuProps extends PropsWithChildren {
  className?: string
}

export const Menu = (props: ContentMenuProps) => {
  const mergeClassName = useClassnames(['content-menu', props.className])
  const NavList = [
    {
      name: '工作台',
      path: ''
    },
    {
      name: '个人中心',
      path: 'user'
    }
  ]
  return (
    <MenuList className={mergeClassName}>
      {
        NavList.map((item, index) => {
          return (
            <MenuItem as="div" key={index}>
              <NavLink to={item.path} className="content-menu-link" end unstable_viewTransition>
                {item.name}
              </NavLink>
            </MenuItem>
          )
        })
      }
    </MenuList>
  )
}
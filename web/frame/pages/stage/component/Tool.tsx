import {
  Menu,
  MenuTrigger,
  MenuList,
  MenuItem,
  MenuPopover,
  Persona
} from "@fluentui/react-components";
import { Svg } from "@components/common"
import { useNavigate } from "react-router-dom"
import { useApp } from '@reducer'
export const HeaderTool = () => {
  const navigate = useNavigate()
  const { state: { theme } } = useApp()
  const onExit = () => {
    useCookie.remove('token')
    navigate('/stage/login')
  }
  const dynamicTheme = useCallback((name: string) => {
    return theme === 'light' ? name : `${name}-light`
  }, [theme])

  return (
    <Menu openOnHover closeOnScroll>
      <MenuTrigger disableButtonEnhancement>
        <Persona className="cursor-pointer"
          name="小鱼儿"
          secondaryText="ll526e.cn"
          presence={{ status: "available" }}
          avatar={{
            image: {
              src: "https://gravatar.com/userimage/224128994/d5ef703baaa37c449015605a25e75d52.jpeg",
              alt: "小鱼儿",
            },
          }} />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem icon={<Svg name={dynamicTheme('person')} />}>个人中心</MenuItem>
          <MenuItem icon={<Svg name={dynamicTheme('exit')} />} onClick={onExit}>退出账号</MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}
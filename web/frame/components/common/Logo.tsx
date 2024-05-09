import { Link } from "react-router-dom"
import LogoSVG from '@assets/logo.svg'

export const Logo = () => {
  return (
    <Link to='/' className='logo'>
      <img src={LogoSVG} height={36} alt="Pear Website" />
    </Link>
  )
}
import { NavLink } from "react-router-dom"
const Home = () => {
  return (
    <div className="home-wrap">
      <div className="home-wrap__inner">
        <div className="title">
          The First Non-Custodial Liquidity Protocol On Solana
        </div>
        <div className="sub-title">
          Port Finance is a lending protocol that aims to provide an entire suite of fixed income products including variable rate lending, fixed rate lending and interest rate swaps
        </div>
        <NavLink to="/stage" className="open-stage" unstable_viewTransition>
          Open Stage
        </NavLink>
      </div>
    </div>
  )
}
export default Home
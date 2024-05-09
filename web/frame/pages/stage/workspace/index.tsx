import { Menu } from '../component'
import { Outlet } from "react-router-dom";

const StageHome = () => {
  return (
    <div className="stage-home flex flex-1">
      <Menu />
      <Outlet />
    </div>
  );
}
export default StageHome
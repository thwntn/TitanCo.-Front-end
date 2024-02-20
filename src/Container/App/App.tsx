import { Outlet } from "react-router-dom";
import themes from "./App.module.scss";
import SideCoponent from "../../Component/Side/Side";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/Store";
import { useEffect } from "react";
import { identitySlice } from "../../Store/Reducer/Identity/User";
import Topbar from "../../Component/Topbar/Topbar";
export const WIDTH_SLIDE = 286;

function AppContainer() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(identitySlice.actions.load());
  }, []);
  return (
    <div className={themes.frame}>
      <div style={{ minWidth: WIDTH_SLIDE }}>
        <SideCoponent width={WIDTH_SLIDE} />
      </div>
      <div className={themes.container}>
        <Topbar></Topbar>
        <Outlet />
      </div>
    </div>
  );
}

export default AppContainer;

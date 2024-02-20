import SearchTopbarIcon from "../../Assets/Icon/Topbar/Search.svg";
import SwitchTopbarIcon from "../../Assets/Icon/Topbar/Switch.svg";
import themes from "./Topbar.module.scss";
import Notification from "../Notification/Notification";
export const TOPBAR_HEGHT = 58;

function Topbar() {
  return (
    <div style={{ height: TOPBAR_HEGHT }} className={themes.frame}>
      <div className={themes.wrapperSearch}>
        <img src={SearchTopbarIcon} className={themes.icon} />
        <span>Search</span>
      </div>
      <div className="flex px-8">
        <Notification></Notification>
        <img src={SwitchTopbarIcon} className=" opacity-40 w-[24px]" />
      </div>
      {/* <div className={themes.profile}>
        <img className={themes.avatar} src={identity.user?.avatar} />
        <div className={themes.content}>
          <span className={themes.name}>{identity.user?.name}</span>
          <span className={themes.email}>{identity.user?.email}</span>
        </div>
      </div> */}
    </div>
  );
}

export default Topbar;

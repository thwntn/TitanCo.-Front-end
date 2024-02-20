import { useSelector } from "react-redux";
import BellTopbarIcon from "../../Assets/Icon/Notification/Bell.svg";
import { RootState } from "../../Store/Store";
import moment from "moment";
import themes from "./Notification.module.scss";
import Button from "../../UI/Button/Button";

function Notification() {
  const identity = useSelector(
    (rootState: RootState) => rootState.identityState
  );
  return (
    <div className={themes.frame}>
      <div className={themes.frameIcon}>
        <img src={BellTopbarIcon} className={themes.icon} />
        <span className={themes.dot}>10</span>
      </div>
      <ul className={themes.listNotification}>
        <span className="text-[18px] font-bold px-8">Notification</span>
        <li className="flex items-start gap-6 px-8 py-4 cursor-pointer">
          <img
            src={identity.user?.avatar}
            className="w-[48px] h-[48px] rounded-full object-cover"
          />
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <span>
                <b>{identity.user?.name}</b> invite you join to 🤞{" "}
                <b>Manager Dib Found</b>
              </span>
              <span className="text-[10px] text-gray-500">
                {moment().format("HH:mm")}
              </span>
            </div>
            <div className="flex gap-4">
              <span className="px-4 text-[#21669b] border-[2px] border-[#21669b] rounded-md">
                User
              </span>
              <span className="px-4 text-[#cc2f2f] border-[2px] border-[#cc2f2f] rounded-md">
                System
              </span>
              <span className="px-4 text-[#28c850] border-[2px] border-[#28c850] rounded-md">
                Dashboard
              </span>
            </div>
            <nav className="flex gap-4">
              <Button mode="default" icon="next">
                Accept
              </Button>
              <Button mode="warning">Reject</Button>
            </nav>
          </div>
        </li>
        <li className="flex items-center gap-6 px-8 py-4 cursor-pointer">
          <img
            src={identity.user?.avatar}
            className="w-[48px] h-[48px] rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span>
              <b>{identity.user?.name}</b> invite you join to 🤞{" "}
              <b>Manager Dib Found</b>
            </span>
            <span className="text-[10px] text-gray-500">
              {moment().format("HH:mm")}
            </span>
          </div>
        </li>
        <li className="flex items-center gap-6 px-8 py-4 cursor-pointer">
          <img
            src={identity.user?.avatar}
            className="w-[48px] h-[48px] rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span>
              <b>{identity.user?.name}</b> invite you join to 🤞{" "}
              <b>Manager Dib Found</b>
            </span>
            <span className="text-[10px] text-gray-500">
              {moment().format("HH:mm")}
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Notification;

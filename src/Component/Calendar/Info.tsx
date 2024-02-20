import TaskPlanningIcon from "../../Assets/Icon/Planning/Task.svg";
import BookMarkPlanningIcon from "../../Assets/Icon/Planning/BookMark.svg";
import MailBoxPlanningIcon from "../../Assets/Icon/Planning/MailBox.svg";
import CountNotiPlanningIcon from "../../Assets/Icon/Planning/CountNotification.svg";
import Icon from "../../UI/Icon/Icon";

function InfoComponent() {
  return (
    <div className="custom-border w-full rounded-xl p-4 bg-white flex flex-col gap-4">
      <span className="font-bold text-[16px]">Category</span>
      <ul className="flex flex-col gap-6">
        <li className="flex items-center gap-2">
          <Icon size={24} src={TaskPlanningIcon}></Icon>
          <span>Quanlity task today: 10</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon size={24} src={BookMarkPlanningIcon}></Icon>
          <span>Total task of Week: 46</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon size={24} src={CountNotiPlanningIcon}></Icon>
          <span>Setup send to notification: 3</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon size={24} src={MailBoxPlanningIcon}></Icon>
          <span>Setup send to email: 12</span>
        </li>
      </ul>
    </div>
  );
}

export default InfoComponent;

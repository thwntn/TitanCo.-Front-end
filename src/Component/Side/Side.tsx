import themes from "./Side.module.scss";
import { app, system, stogare, note, task, invoice } from "./Data";
import Input from "../../UI/Input/Input";
import AppNoteIcon from "../../Assets/Icon/Linked/Calendar.png";
import RecursiveComponent from "./Recursive/Recursive";
import { useNavigate } from "react-router-dom";
import { Redirect } from "../../Shared/Redirect";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";

interface IProps {
  width: number;
}

function SideCoponent(props: IProps) {
  const navigation = useNavigate();
  const identity = useSelector(
    (rootState: RootState) => rootState.identityState
  );
  if (!identity.user) return identity.user;

  function profile() {
    navigation(Redirect.PROFILE);
  }

  return (
    <div className={themes.frame} style={{ width: props.width }}>
      <div className={themes.wrapper}>
        <div className="flex flex-col gap-8 w-full">
          <div className={themes.wrapperLogo}>
            <img src={AppNoteIcon} className={themes.logo} />
            <span>Titan Co.</span>
          </div>
          <Input placeholder="Search"></Input>
          <div
            className="flex gap-4 items-center p-2 w-full rounded-md cursor-pointer hover:bg-gray-100"
            onClick={profile}
          >
            <img
              src={identity.user.avatar}
              className="w-[42px] h-[42px] rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-bold">{identity.user.name}</span>
              <span className="text-[10px] text-gray-500">
                {identity.user.email}
              </span>
            </div>
          </div>
        </div>
        <RecursiveComponent item={app} title="FEATURE"></RecursiveComponent>
        <RecursiveComponent item={invoice} title="INVOICE"></RecursiveComponent>
        <RecursiveComponent item={task} title="TASK"></RecursiveComponent>
        <RecursiveComponent item={stogare} title="STOGARE"></RecursiveComponent>
        <RecursiveComponent item={note} title="NOTE"></RecursiveComponent>
        <RecursiveComponent
          item={system}
          title="OTHER CASE"
        ></RecursiveComponent>
      </div>
    </div>
  );
}

export default SideCoponent;

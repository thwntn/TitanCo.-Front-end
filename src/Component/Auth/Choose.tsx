import LogoIcon from "../../Assets/Icon/Linked/Note.png";
import GuestAuthIcon from "../../Assets/Icon/Auth/Guest.svg";
import UmbrellaAuthIcon from "../../Assets/Icon/Auth/Umbrella.svg";
import FlagAuthIcon from "../../Assets/Icon/Auth/Flag.svg";
import RightAuthIcon from "../../Assets/Icon/Auth/Right.svg";
import { useNavigate } from "react-router-dom";
import { Redirect } from "../../Shared/Redirect";

function ChooseComponent() {
  const navigation = useNavigate();

  function gotoLogin() {
    navigation(`/${Redirect.LOGIN}`);
  }

  return (
    <div className="flex flex-col gap-16 fixed inset-0 justify-center items-center">
      <img src={LogoIcon} className="w-[156px]" />
      <span className="font-bold text-[24px]">Notiux</span>
      <ul className="flex flex-col gap-8">
        <li className="cursor-pointer custom-shadow p-4 rounded-md flex gap-6 items-center">
          <img src={GuestAuthIcon} className="w-[32px]" />
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-bold">Guest</span>
            <span>Trial appliaction & not signup, login</span>
          </div>
          <img src={RightAuthIcon} className="w-[48px] px-6" />
        </li>
        <li
          className="cursor-pointer custom-shadow p-4 rounded-md flex gap-6 items-center"
          onClick={gotoLogin}
        >
          <img src={UmbrellaAuthIcon} className="w-[32px]" />
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-bold">Log in.</span>
            <span>Trial appliaction & not signup, login</span>
          </div>
          <img src={RightAuthIcon} className="w-[48px] px-6" />
        </li>
        <li className="cursor-pointer custom-shadow p-4 rounded-md flex gap-6 items-center">
          <img src={FlagAuthIcon} className="w-[32px]" />
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-bold">Sign up</span>
            <span>Trial appliaction & not signup, login</span>
          </div>
          <img src={RightAuthIcon} className="w-[48px] px-6" />
        </li>
      </ul>
      <span className="font-bold">Design & Develop by Thien Tan</span>
    </div>
  );
}

export default ChooseComponent;

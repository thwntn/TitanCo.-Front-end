import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import UserProfileIcon from "../../Assets/Icon/Profile/user.svg";
import PhoneProfileIcon from "../../Assets/Icon/Profile/Phone.svg";
import MailProfileIcon from "../../Assets/Icon/Profile/Mail.svg";
import AddressProfileIcon from "../../Assets/Icon/Profile/Address.svg";
import CameraProfileIcon from "../../Assets/Icon/Profile/Camera.svg";
import EditProfileIcon from "../../Assets/Icon/Profile/Edit.svg";
import Icon from "../../UI/Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useRef, useState } from "react";
import {
  changeAvatar,
  changeCoverPicture,
} from "../../Store/Reducer/Identity/User";

type Mode = "avatar" | "cover";

function ProfileComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const [mode, setMode] = useState<Mode>();
  const identity = useSelector(
    (rootState: RootState) => rootState.identityState
  );
  const refInput = useRef<HTMLInputElement | null>(null);
  if (!identity.user) return identity.user;

  function openUpload(mode: Mode) {
    setMode(mode);
    refInput.current?.click();
  }

  function changeInput(files: FileList | null) {
    const file = files?.item(0);
    if (file) {
      mode == "avatar" && dispatch(changeAvatar(file));
      mode == "cover" && dispatch(changeCoverPicture(file));
    }
  }

  return (
    <div className="flex flex-col p-12">
      <input
        ref={refInput}
        onChange={(event) => changeInput(event.target.files)}
        className="hidden"
        type="file"
      ></input>
      <div className="relative">
        <img
          src={CameraProfileIcon}
          onClick={() => openUpload("cover")}
          className="w-[18px] absolute top-[10px] right-[10px] cursor-pointer"
        />
        <img
          src={identity.user.coverPicture}
          className=" w-full h-[256px] rounded-2xl object-cover"
        />
      </div>
      <div className="p-10 flex items-start justify-between">
        <div className="flex gap-4 relative">
          <div className="relative flex justify-center mt-[-60px] ">
            <img
              src={CameraProfileIcon}
              onClick={() => openUpload("avatar")}
              className="w-[18px] absolute bottom-[10px] cursor-pointer"
            />
            <img
              src={identity.user.avatar}
              className="w-[120px] h-[120px] rounded-full object-cover border-2 border-white custom-shadow"
            />
          </div>
          <div className="flex flex-col">
            <span className="block text-2xl text font-bold">
              {identity.user.name}
            </span>
            <span className="text-gray-500">Im a Solution Web Developer</span>
          </div>
        </div>
        <nav className="flex gap-4">
          <Button icon="add" mode="default">
            Add
          </Button>
          <Button mode="warning">Message</Button>
        </nav>
      </div>
      <div className="flex gap-12">
        <div className="custom-shadow w-[512px] bg-white flex flex-col gap-8 p-6 rounded-xl">
          <div className="flex items-center justify-between">
            <span className="font-bold">Infomation</span>
            <Icon src={EditProfileIcon}></Icon>
          </div>
          <div className="flex gap-2 items-center">
            <Icon src={MailProfileIcon}></Icon>
            <span>{identity.user.email}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Icon src={UserProfileIcon}></Icon>
            <Input
              className="w-full border-none"
              defaultValue={identity.user.name}
              mode="view"
            ></Input>
          </div>
          <div className="flex gap-2 items-center">
            <Icon src={PhoneProfileIcon}></Icon>
            <Input
              className="w-full border-none"
              defaultValue={"0488547363"}
              mode="view"
            ></Input>
          </div>
          <div className="flex gap-2 items-center">
            <Icon src={AddressProfileIcon}></Icon>
            <Input
              className="w-full border-none"
              defaultValue={
                "12/23 Lam Van Ben, 7 District, Tan Quy, Ho Chi Minh"
              }
              mode="view"
            ></Input>
          </div>
        </div>
        <div>
          <span className="text font-bold">BIOLOGY</span>
          <p className="leading-10 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;

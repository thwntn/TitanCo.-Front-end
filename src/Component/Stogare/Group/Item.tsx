import { Group } from "../../../Store/Reducer/Stogare/Model";
import PathStogareIcon from "../../../Assets/Icon/Stogare/Path.svg";
import Context from "../../../UI/Context/Context";
import { useNavigate } from "react-router-dom";
import { Redirect } from "../../../Shared/Redirect";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { addMember } from "../../../Store/Reducer/Group/Thunk";

interface IProps {
  item: Group;
}

function ItemGroup(props: IProps) {
  const navigation = useNavigate();

  function gotoInvite() {
    navigation(
      `${Redirect.APP}/${Redirect.GROUP}/${Redirect.INVITE}/${props.item.id}`
    );
  }

  function gotoManager() {
    navigation(
      `${Redirect.APP}/${Redirect.GROUP}/${Redirect.MANAGER}/${props.item.id}`
    );
  }

  return (
    <div className="relative">
      <Context
        className="absolute top-[4px] right-[10px]"
        onClick={(event) => event.stopPropagation()}
        items={[
          {
            name: "Manager",
            cb: () => {
              gotoManager();
            },
          },
          {
            name: "Invite",
            cb: () => {
              gotoInvite();
            },
          },
        ]}
      ></Context>
      <img
        className="h-[156px] w-full rounded-tl-3xl rounded-tr-3xl bg-[#eaeaea] object-cover"
        src={props.item.profile.coverPicture}
        alt=""
      />
      <div className="relative mt-[-38px] flex flex-col items-center justify-start">
        <img src={PathStogareIcon} alt="" className="absolute w-[156px]" />
        <img
          src={props.item.profile.avatar}
          className="z-10 mt-[6px] h-[56px] w-[56px] rounded-full object-cover"
        />
        <div className="z-10 mb-2 mt-6 flex flex-col justify-center gap-1 text-center">
          <span className="text block text-2xl font-bold">
            {props.item.profile.name}
          </span>
          <span className="block w-full">Chủ nhóm</span>
        </div>
      </div>
      <div className="p-4">
        <div className="my-4 flex flex-col gap-2">
          <span className="text text-center text-xl font-bold">
            {props.item.name}
          </span>
        </div>
        <div className="flex w-full justify-center gap-8 p-6">
          <div className="flex flex-col gap-4 text-center">
            <span className="text-gray-400">Folders & Files</span>
            <span className="text-3xl font-bold text-black">
              {props.item.dataGroups.length}
            </span>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <span className="text-gray-400">Thành viên</span>
            <span className="text-3xl font-bold text-black">
              {props.item.members.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemGroup;

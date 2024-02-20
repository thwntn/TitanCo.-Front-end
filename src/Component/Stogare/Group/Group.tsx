import PathStogareIcon from "../../../Assets/Icon/Stogare/Path.svg";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import Empty from "../../../UI/Empty/Empty";
import SideGroupComponent from "./Navigation";
import Name from "../../../UI/Name/Name";
import { groupRequest } from "../../../Store/Reducer/Stogare/Thunk";

function GroupStogareComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const stogareState = useSelector(
    (rootState: RootState) => rootState.stogareState
  );

  function Goto(groupId: number) {
    console.log(groupId);

    // navigate(
    //   `${Redirect.GROUP}/${groupId}/${StogareItemEnum.DefaultMainFolder}`,
    // );
  }

  //   SignalrContext.useSignalREffect(
  //     HubMethodName.UpdateGroup,
  //     function () {
  //       Services.Group.List();
  //     },
  //     [],
  //   );

  useEffect(() => {
    dispatch(groupRequest());
  }, []);
  return (
    <>
      <div className="custom-frame !bg-transparent">
        <Name title="Group"></Name>
        <SideGroupComponent></SideGroupComponent>
        <div>
          <span className="text mb-6 block text-2xl font-bold">Nhóm</span>
          {stogareState.groups.length === 0 && <Empty></Empty>}
          <ul className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {stogareState.groups.map((item, index) => (
              <li
                key={index}
                className="custom-shadow relative rounded-3xl bg-white"
                onClick={() => Goto(item.id)}
              >
                {/* <Context item={item}></Context> */}
                <img
                  className="h-[156px] w-full rounded-tl-3xl rounded-tr-3xl bg-[#eaeaea] object-cover"
                  src={item.user.coverPicture}
                  alt=""
                />
                <div className="relative mt-[-38px] flex flex-col items-center justify-start">
                  <img
                    src={PathStogareIcon}
                    alt=""
                    className="absolute w-[156px]"
                  />
                  <img
                    src={item.user.avatar}
                    className="z-10 mt-[6px] h-[56px] w-[56px] rounded-full object-cover"
                  />
                  <div className="z-10 mb-2 mt-6 flex flex-col justify-center gap-1 text-center">
                    <span className="text block text-2xl font-bold">
                      {item.user.name}
                    </span>
                    <span className="block w-full">Chủ nhóm</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="my-4 flex flex-col gap-2">
                    <span className="text text-center text-xl font-bold">
                      {item.name}
                    </span>
                  </div>
                  <div className="flex w-full justify-center gap-8 p-6">
                    <div className="flex flex-col gap-4 text-center">
                      <span className="text-gray-400">Folders & Files</span>
                      <span className="text-3xl font-bold text-black">
                        {item.dataGroups.length}
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 text-center">
                      <span className="text-gray-400">Thành viên</span>
                      <span className="text-3xl font-bold text-black">
                        {item.members.length}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default GroupStogareComponent;

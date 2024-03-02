import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import Empty from "../../../UI/Empty/Empty";
import SideGroupComponent from "./Side";
import Name from "../../../UI/Name/Name";
import { groupRequest } from "../../../Store/Reducer/Group/Thunk";
import { Redirect } from "../../../Shared/Redirect";
import ItemGroup from "./Item";
import Frame from "../../../UI/Frame/Frame";

function GroupStogareComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();
  const stogareState = useSelector(
    (rootState: RootState) => rootState.stogareState
  );

  function Goto(groupId: string) {
    navigation(
      `${Redirect.APP}/${Redirect.STOGARE}/${Redirect.FILE}/${groupId}`
    );
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
      <Frame>
        <Name title="Group"></Name>
        <SideGroupComponent></SideGroupComponent>
        <div>
          <span className="text mb-6 block text-2xl font-bold">Nhóm</span>
          {stogareState.groups.length === 0 && <Empty></Empty>}
          <ul className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {stogareState.groups.map((item, index) => (
              <li
                key={index}
                className="custom-shadow relative rounded-3xl bg-white cursor-pointer"
                onClick={() => Goto(item.id)}
              >
                <ItemGroup item={item}></ItemGroup>
              </li>
            ))}
          </ul>
        </div>
      </Frame>
      <Outlet></Outlet>
    </>
  );
}

export default GroupStogareComponent;

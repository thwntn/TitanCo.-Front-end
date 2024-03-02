import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Store/Store";
import { useEffect } from "react";
import {
  acceptRequest,
  listRequest,
} from "../../../../Store/Reducer/Group/Thunk";
import Name from "../../../../UI/Name/Name";
import Button from "../../../../UI/Button/Button";
import { Group } from "../../../../Store/Reducer/Stogare/Model";
import Frame from "../../../../UI/Frame/Frame";

function RequestJoinGroup() {
  const dispatch = useDispatch<AppDispatch>();
  const group = useSelector((root: RootState) => root.groupState);

  function acceptInviteClick(group: Group) {
    dispatch(acceptRequest(group.id)).then(function () {
      dispatch(listRequest());
    });
  }

  useEffect(function () {
    dispatch(listRequest());
  }, []);
  return (
    <Frame>
      <Name title="List invite to group"></Name>
      <ul className="grid grid-cols-4 gap-12">
        {group.list.map((item, index) => (
          <li
            key={index}
            className="flex flex-col gap-2 custom-border rounded-md"
          >
            <img
              src={item.image}
              className=" object-cover h-[156px] rounded-md"
            />
            <div className="flex-col flex p-4 gap-4">
              <span className="font-bold text-2xl">{item.name}</span>
              <span>{item.profile.name}</span>
              <nav className="flex gap-4">
                <Button
                  mode="default"
                  icon="next"
                  onClick={() => acceptInviteClick(item)}
                >
                  Accept
                </Button>
                <Button mode="warning">Reject</Button>
              </nav>
            </div>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export default RequestJoinGroup;

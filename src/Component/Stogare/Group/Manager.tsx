import { useParams } from "react-router-dom";
import Name from "../../../UI/Name/Name";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import { changeImage, info, rename } from "../../../Store/Reducer/Group/Thunk";
import Input from "../../../UI/Input/Input";
import Select, { Item } from "../../../UI/Select/Select";
import Button from "../../../UI/Button/Button";
import ListMemember from "./Manager/ListMemer";
import { groupSlice } from "../../../Store/Reducer/Group/Group";
import Frame from "../../../UI/Frame/Frame";

function ManagerGroup() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const group = useSelector((root: RootState) => root.groupState);
  const refInput = useRef<HTMLInputElement | null>(null);

  function changeAvatarClick() {
    if (refInput.current) refInput.current.click();
  }

  function changeOwnerList(): Item[] {
    if (group.select)
      return group.select.members.map((item, index) => ({
        ...item,
        id: index,
        name: item.profile.name,
      }));
    return [];
  }

  function changeAvatar(file: File) {
    const form = new FormData();
    form.append(file.name, file);
    dispatch(changeImage({ groupId: String(params.groupId), form }));
  }

  useEffect(function () {
    dispatch(info(String(params.groupId)));
  }, []);
  return (
    <Frame>
      <div className="flex justify-between items-center">
        <Name title="Group Manager"></Name>
        <Button
          mode="default"
          icon="next"
          onClick={() => {
            if (group.select)
              dispatch(
                rename({
                  groupId: String(params.groupId),
                  name: group.select.name,
                })
              );
          }}
        >
          Save
        </Button>
      </div>
      <div className="flex gap-8">
        <img
          src={group.select?.image}
          className="min-w-[456px] h-[256px] object-cover rounded-md"
        />
        <div className="w-full flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <Input
              title="Group name"
              value={group.select?.name}
              onChange={(event) =>
                dispatch(groupSlice.actions.changeName(event.target.value))
              }
            ></Input>
          </div>
          <div className="flex flex-col gap-2">
            <Input
              title="Member group"
              value={group.select?.members.length + " Member"}
            ></Input>
          </div>
          <div className="flex relative flex-col gap-2">
            <Select
              title="Owner"
              value={group.select?.profile.name ?? ""}
              items={changeOwnerList()}
              onSelect={() => {}}
            ></Select>
          </div>
          <input
            ref={refInput}
            type="file"
            readOnly
            onChange={(event) => {
              if (event.target.files) changeAvatar(event.target.files[0]);
            }}
            className="hidden"
          />
          <Button mode="warning" onClick={changeAvatarClick}>
            Change Avatar
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <span className="font-bold">Members</span>
        <ListMemember></ListMemember>
      </div>
    </Frame>
  );
}

export default ManagerGroup;

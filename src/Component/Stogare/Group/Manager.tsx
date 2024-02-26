import { useParams } from "react-router-dom";
import Name from "../../../UI/Name/Name";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../Store/Store";
import { info } from "../../../Store/Reducer/Group/Thunk";
import Input from "../../../UI/Input/Input";
import Select from "../../../UI/Select/Select";
import Button from "../../../UI/Button/Button";
import Context from "../../../UI/Context/Context";
import CameraIcon from "../../../Assets/Icon/Stogare/Camera.svg";
import Icon from "../../../UI/Icon/Icon";

interface IStatus {
  [key: string]: {
    name: string;
    color: string;
    background: string;
  };
}

const status: IStatus = {
  0: {
    name: "Pending",
    color: "#B86F02",
    background: "#FFF1D6",
  },
  1: {
    name: "Active",
    color: "#118D57",
    background: "#DBF6E5",
  },
};

function ManagerGroup() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const group = useSelector((root: RootState) => root.groupState);

  useEffect(function () {
    dispatch(info(String(params.groupId)));
  }, []);
  return (
    <div className="custom-frame">
      <div className="flex justify-between items-center">
        <Name title="Group Manager"></Name>
        <Button mode="default" icon="next">
          Save
        </Button>
      </div>
      <div className="flex gap-8">
        <img
          src={group.select?.profile.coverPicture}
          className="min-w-[456px] h-[256px] object-cover rounded-md"
        />
        <div className="w-full flex flex-col gap-12">
          <div className="flex flex-col gap-2">
            <Input title="Group name" value={group.select?.name}></Input>
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
              items={[]}
              onSelect={() => {}}
            ></Select>
          </div>
          <Button mode="warning">Change Avatar</Button>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <span className="font-bold">Members</span>
        <ul className="flex flex-col gap-6">
          {group.select?.members.map((item, index) => (
            <li
              key={index}
              className="flex gap-8 justify-between w-full items-center custom-border p-4 rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.profile.avatar}
                  className="w-[48px] h-[48px] object-cover rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <span>{item.profile.name}</span>
                  <span className="text-[12px] text-gray-500">
                    {item.profile.email}
                  </span>
                </div>
              </div>
              <span>0981483636x</span>
              <span>Wuckert Inc</span>
              <span
                className="p-2 px-6 rounded-full"
                style={{
                  color: status[item.status].color,
                  background: status[item.status].background,
                }}
              >
                {status[item.status].name}
              </span>
              <Context items={[]}></Context>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ManagerGroup;

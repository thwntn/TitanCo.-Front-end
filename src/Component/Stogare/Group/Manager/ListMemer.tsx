import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Store/Store";
import Context, { ContextHandle } from "../../../../UI/Context/Context";
import { User } from "../../../../Store/Reducer/Identity/Model";
import { info, removeMember } from "../../../../Store/Reducer/Group/Thunk";
import { useParams } from "react-router-dom";

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

function ListMemember() {
  const group = useSelector((root: RootState) => root.groupState);
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();

  const context = (user: User): ContextHandle[] => [
    {
      name: "Remove",
      cb: (): void => {
        dispatch(
          removeMember({
            emails: [user.email],
            groupId: String(group.select?.id),
          })
        ).then(function () {
          dispatch(info(String(params.groupId)));
        });
      },
    },
  ];

  return (
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
          <Context items={context(item.profile)}></Context>
        </li>
      ))}
    </ul>
  );
}

export default ListMemember;

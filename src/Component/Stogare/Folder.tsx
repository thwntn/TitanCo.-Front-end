import { useNavigate, useParams } from "react-router-dom";
import FolderStogareIcon from "../../Assets/Icon/Stogare/Folder.svg";
import Empty from "../../UI/Empty/Empty";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import {
  StogareType,
  byteToSize,
  stogareSlice,
} from "../../Store/Reducer/Stogare/Stogare";
import moment from "moment";
import { useEffect } from "react";
import { Redirect } from "../../Shared/Redirect";
import Context from "../../UI/Context/Context";
import { Stogare } from "../../Store/Reducer/Stogare/Model";
import { ContextMode } from "../../Store/Reducer/Stogare/Context";
import { stogareRequest } from "../../Store/Reducer/Stogare/Thunk";

function FolderStogareComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const params = useParams();
  const stogareState = useSelector(
    (rootState: RootState) => rootState.stogareState
  );
  const folders = stogareState.stogares.filter(
    (item) => item.type === StogareType.Folder
  );

  function openFolder(stogareId: string) {
    navigate(
      `${Redirect.APP}/${Redirect.STOGARE}/${Redirect.FILE}/${stogareId}`
    );
  }

  function setContext(item: Stogare) {
    dispatch(stogareSlice.actions.context({ mode: ContextMode.Folder, item }));
  }

  useEffect(
    function () {
      params.stogareId && dispatch(stogareRequest(String(params.stogareId)));
    },
    [params]
  );

  return (
    <>
      {folders.length === 0 && <Empty />}
      <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {folders.map((item, index) => (
          <li
            className="custom-border group relative flex aspect-[2/1] cursor-pointer flex-col justify-between rounded-2xl p-4"
            key={index}
            onClick={() => openFolder(item.id)}
          >
            <button
              onClick={(event) => event.stopPropagation()}
              className="group/context absolute right-4 top-4"
            >
              <Context
                items={stogareState.context}
                onClick={() => setContext(item)}
              ></Context>
            </button>
            <img className="w-[48px]" src={FolderStogareIcon} alt="" />
            <span className="ouline-none w-full bg-transparent outline-none">
              {item.displayName}
            </span>
            <span className="text-gray-400">
              Created: {moment(item.created).format("YYYY-MM-DD")}
            </span>
            <span className="flex justify-between">
              <span>{item.counter} Folder & File</span>
              <span className="text-gray-400">
                {byteToSize(item.counterSize)}MB
              </span>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FolderStogareComponent;

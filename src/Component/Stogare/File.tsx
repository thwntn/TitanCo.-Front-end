import UserStogareIcon from "../../Assets/Icon/Stogare/User.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import {
  RENDER_NUMBER,
  StogareType,
  byteToSize,
  stogareSlice,
} from "../../Store/Reducer/Stogare/Stogare";
import Empty from "../../UI/Empty/Empty";
import { Stogare } from "../../Store/Reducer/Stogare/Model";
import moment from "moment";
import ThumbnailComponent from "./Stogare/Thumbnail/Thumbnail";
import Context from "../../UI/Context/Context";
import Button from "../../UI/Button/Button";
import { ContextMode } from "../../Store/Reducer/Stogare/Context";

function FileStogareComponent() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch<AppDispatch>();
  const stogareState = useSelector(
    (rootState: RootState) => rootState.stogareState
  );
  const files = stogareState.stogares.filter(
    (item) => item.type === StogareType.File
  );

  function getView(view: number) {
    const limit = [];
    for (let index = 0; index < view * RENDER_NUMBER; index++)
      files[index] && limit.push(files[index]);
    return limit;
  }

  function more() {
    setPage((previous) => previous + 1);
  }

  function setContext(item: Stogare) {
    dispatch(stogareSlice.actions.context({ mode: ContextMode.File, item }));
  }

  function isShowMore() {
    const next = page + 1;
    const nextElements = getView(next).filter(Boolean).length;
    return (
      nextElements >= next * RENDER_NUMBER ||
      nextElements > page * RENDER_NUMBER
    );
  }
  return (
    <>
      <div>{getView(page).length === 0 && <Empty />}</div>
      <ul className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {getView(page).map((item, index) => (
          <li
            className="custom-border group relative flex cursor-pointer flex-col justify-between rounded-2xl p-4"
            key={index}
          >
            <div>
              <span className="block rounded-xl">
                <ThumbnailComponent item={item}></ThumbnailComponent>
              </span>
              <div className="flex flex-col gap-2 px-2 py-6">
                <p className="items-center overflow-hidden truncate bg-transparent outline-none">
                  {item.displayName}...
                </p>
                <span className="block text-gray-400">
                  Created: {moment(item.created).format("YYYY-MM-DD")} -{" "}
                  {byteToSize(item.size)} MB
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between border-t-2 border-gray-100 px-2 pt-4">
              <div className="flex items-center">
                <img
                  className="mr-3 w-[24px] rounded-full bg-slate-100 p-2"
                  src={UserStogareIcon}
                />
                <span className=" text-gray-400">34 User</span>
              </div>
              <div
                className="animation_show flex cursor-pointer items-center gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="group/context relative">
                  <Context
                    onClick={() => setContext(item)}
                    items={stogareState.context}
                  ></Context>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {isShowMore() && (
        <div className="flex justify-center py-12">
          <Button mode="default" onClick={more}>
            More ...
          </Button>
        </div>
      )}
    </>
  );
}

export default FileStogareComponent;

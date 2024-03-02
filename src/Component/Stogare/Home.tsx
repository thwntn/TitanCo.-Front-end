import CloudStogareIcon from "../../Assets/Icon/Stogare/Cloud.svg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../Store/Store";
import { Redirect } from "../../Shared/Redirect";
import InfoComponent from "./Info";
import { mapper } from "./Data";
import {} from "../../Store/Reducer/Stogare/Stogare";
import FileStogareComponent from "./File";
import Name from "../../UI/Name/Name";
import { homeRequest, recentRequest } from "../../Store/Reducer/Stogare/Thunk";
import Frame from "../../UI/Frame/Frame";

function HomeStogareComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const stogareState = useSelector(
    (rootState: RootState) => rootState.stogareState
  );

  function GotoSearch(content: string) {
    navigate(`${Redirect.SEARCH}?${"PARAMS"}=${content}`);
  }

  useEffect(() => {
    dispatch(homeRequest());
    dispatch(recentRequest());
  }, []);
  return (
    <Frame>
      <Name title="Overview"></Name>
      <div>
        <h1 className="text-2xl font-bold">Infomation & Spacing</h1>
        <InfoComponent></InfoComponent>
        <div className="mt-4 flex gap-6">
          {stogareState.home.counter.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="mr-4 h-4 w-4 rounded-full"
                style={{ backgroundColor: mapper[item.name].color }}
              ></div>
              <p>{mapper[item.name].name}</p>
            </div>
          ))}
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {stogareState.home.counter.map((item, index) => (
          <li
            key={index}
            className="custom-border flex h-56 cursor-pointer flex-col justify-between rounded-2xl bg-white p-6"
            onClick={function () {
              GotoSearch(mapper[item.name].search);
            }}
          >
            <div className="flex">
              <img
                className="mr-2 w-[20px]"
                src={mapper[item.name].icon}
                alt=""
              />
              <p className="w-full">{mapper[item.name].name}</p>
            </div>
            <p className="text w-full text-right text-gray-500">
              {item.quanlity} Files
            </p>
          </li>
        ))}
      </ul>
      <div className="w-full rounded-2xl bg-gradient-to-r from-[#e6fbfe] to-[#edddfb] p-8">
        <div className="flex items-center justify-between">
          <div>
            <div>
              <img className="mb-4 w-[36px]" src={CloudStogareIcon} alt="" />
              <p className="pt-2 text-2xl font-bold">Backup</p>
            </div>
            <ul className="flex gap-8 py-4 pb-1">
              {stogareState.home.counter.map((item, index) => (
                <li key={index}>
                  <div className="flex flex-col gap-2">
                    <span>{mapper[item.name].name}</span>
                    <p className="text text-gray-600">{item.quanlity} File</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button className="rounded-full bg-[#fff] px-8 py-4 text-black shadow-none">
            Get started
          </button>
        </div>
      </div>
      <div>
        <span className="block pb-8 text-2xl font-bold">Recent</span>
        <FileStogareComponent></FileStogareComponent>
      </div>
    </Frame>
  );
}

export default HomeStogareComponent;

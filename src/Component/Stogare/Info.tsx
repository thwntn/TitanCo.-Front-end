import StogareIcon from "../../Assets/Icon/Stogare/Stogare.svg";
import { useSelector } from "react-redux";
import { mapper } from "./Data";
import { RootState } from "../../Store/Store";

function InfoComponent() {
  const stogareState = useSelector(
    (rootState: RootState) => rootState.stogareState
  );

  return (
    <div>
      <p className="my-6 flex items-center gap-4">
        <img src={StogareIcon} className="w-[32px]" alt="" />
        {(stogareState.home.totalSize / 1024 / 1024 / 1024).toFixed(1)} GB used from &nbsp;
        {(stogareState.home.setting.maxSize / 1024 / 1024 / 1024).toFixed(1)}
        GB
      </p>
      <div className="relative flex h-5 w-full overflow-hidden rounded-3xl bg-gray-100">
        {stogareState.home.counter.map((item, index) => (
          <div
            key={index}
            className="bottom-0 left-0 top-0 h-5"
            style={{
              zIndex: index,
              width: item.percent + "%",
              backgroundColor: mapper[item.name].color,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default InfoComponent;

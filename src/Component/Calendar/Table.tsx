import NotificationIcon from "../../Assets/Icon/Planning/Notification.svg";
import EmailIcon from "../../Assets/Icon/Planning/Email.svg";
import moment from "moment";
import Icon from "../../UI/Icon/Icon";
import { times } from "./Data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { calendarSlice } from "../../Store/Reducer/Calendar/Planning";
import CreatePlanningCaledarComponent from "./Create";

function TablePlanningComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const calendarState = useSelector(
    (rootState: RootState) => rootState.calendarState
  );
  const day = moment(calendarState.currentTime).format("dddd");

  function openCreate(select: string) {
    dispatch(calendarSlice.actions.select(select));
  }

  function countTask(day: string) {
    return calendarState.plannings.filter((item) => item.day == day).length;
  }

  function getTask(hour: string, day: string) {
    const result = calendarState.plannings.filter(
      (item) => item.hour == hour && item.day == day
    );
    return result;
  }
  return (
    <table className="w-full table-fixed">
      <thead>
        <tr className="z-50 bg-[#f9fcfc]">
          <th className="w-[64px] p-6 text-center"></th>
          <th className="p-6">
            <div className="flex justify-between">
              <div className="flex flex-col items-start gap-2">
                <span className="text-xl">{day}</span>
                <span className="text-[10px] font-normal text-gray-400">
                  {moment().day(day).format("YYYY-MM-DD, dddd")}
                </span>
              </div>
              <span className="h-fit rounded-md bg-[#ffffff] font-normal px-[6px] text-[#317343]">
                {countTask(day)}
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {times.map(function (item, index) {
          const time = moment.utc(item * 3600 * 1000).format("HH:mm");
          const tasks = getTask(time, day);
          return (
            <tr key={index} className="border-[2px] border-dashed border-white">
              <td className="flex h-[64px] items-start justify-center">
                {time}
              </td>
              <td
                key={index}
                className="cursor-pointer border-[2px] border-dashed border-white p-2 text-left align-top"
                onClick={() => openCreate(day + time)}
              >
                {calendarState.selected == day + time && (
                  <CreatePlanningCaledarComponent
                    day={day}
                    hour={time}
                  ></CreatePlanningCaledarComponent>
                )}
                <div className="grid grid-cols-4 gap-2">
                  {tasks.map((task, itask) => (
                    <div
                      style={{
                        backgroundImage: `linear-gradient(-35deg, #ffffff 86%, ${task.color}80)`,
                        border: `2px solid #fff`,
                      }}
                      key={itask}
                      className="custom-shadow relative flex flex-col justify-between overflow-hidden rounded-md bg-white"
                    >
                      {/* <ContextPlanningContainer
                        item={task}
                      ></ContextPlanningContainer> */}
                      <div className="flex flex-col justify-between gap-3 p-4">
                        <span className="text">{task.name}</span>
                        <span className="text-[10px] text-gray-400">
                          From: {task.from} - To: {task.to}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          Created: {moment(task.created).format()}
                        </span>
                      </div>
                      <nav className="flex items-center gap-2 px-3 py-2">
                        <Icon size={24} src={EmailIcon}></Icon>
                        <Icon size={24} src={NotificationIcon}></Icon>
                      </nav>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TablePlanningComponent;

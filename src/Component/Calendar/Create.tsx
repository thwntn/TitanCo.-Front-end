import { useEffect } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { colors } from "./Data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import ClosePlanningIcon from "../../Assets/Icon/Planning/Close.svg";
import {
  calendarSlice,
  createRequest,
  planningGetRequest,
} from "../../Store/Reducer/Calendar/Planning";
import moment from "moment";
import Icon from "../../UI/Icon/Icon";

interface IProps {
  day: string;
  hour: string;
}

function CreatePlanningCaledarComponent(props: IProps) {
  const dispatch = useDispatch<AppDispatch>();
  const calendarState = useSelector(
    (rootState: RootState) => rootState.calendarState
  );

  function close() {
    dispatch(calendarSlice.actions.select(String()));
  }

  function updateCreate(key: string, value: string) {
    dispatch(
      calendarSlice.actions.create({ ...calendarState.create, [key]: value })
    );
  }

  function create() {
    if (calendarState.create)
      dispatch(createRequest(calendarState.create)).then(function () {
        dispatch(
          planningGetRequest(moment.utc(calendarState.currentTime).week())
        );
      });
  }

  useEffect(function () {
    const initial = {
      ...calendarState.create,
      weekOfYear: moment.utc(calendarState.currentTime).week(),
      hour: props.hour,
      from: props.hour,
      to: props.hour,
      setNotification: false,
      setEmail: false,
      color: colors[0],
      dateTime: calendarState.currentTime,
      day: props.day,
    };

    dispatch(calendarSlice.actions.create(initial));
  }, Array.from({ length: 0 }));
  return (
    <div>
      <div className="flex flex-col gap-8 p-[24px]">
        <div className="flex flex-col gap-4">
          <div
            className="flex justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Description</span>
            <Icon src={ClosePlanningIcon} onClick={close}></Icon>
          </div>
          <Input
            onChange={(event) => updateCreate("name", event.target.value)}
            className="w-[312px]"
            type="text"
            placeholder="@Description for task"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span>Color</span>
          <ul className="flex items-center gap-4">
            {colors.map((item, index) => (
              <li
                key={index}
                onClick={() => updateCreate("color", item)}
                className="cursor-pointer rounded-full p-[2px]"
              >
                <div
                  style={{
                    backgroundColor: item,
                    width: item == calendarState.create?.color ? 24 : undefined,
                  }}
                  className="custom-border h-[14px] w-[14px] rounded-full"
                ></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full gap-4">
          <div className="flex w-full flex-col gap-4">
            <span>Time start</span>
            <Input
              defaultValue={props.hour}
              type="time"
              onChange={(event) => updateCreate("from", event.target.value)}
            />
          </div>
          <div className="flex w-full flex-col gap-4">
            <span>Time end</span>
            <Input
              defaultValue={props.hour}
              onChange={(event) => updateCreate("to", event.target.value)}
              type="time"
            />
          </div>
        </div>
        <nav className="flex flex-col gap-4 py-4">
          <span>Settings</span>
          <div className="flex gap-4">
            <button
              style={{
                border: calendarState.create?.setEmail
                  ? `2px solid`
                  : undefined,
              }}
              className="custom-button"
            >
              Set in email
            </button>
            <button
              style={
                {
                  // border: props.planning.setNotification
                  //   ? `2px solid`
                  //   : undefined,
                }
              }
              // onClick={() => updateCreate("setNotification", true)}
              className="custom-button"
            >
              Alarm in notifiation
            </button>
          </div>
        </nav>
        {/* <Button onClick={props.create} icon="add" mode="default">
          Create
        </Button> */}
        <Button onClick={create} icon="add" mode="default">
          Create
        </Button>
      </div>
    </div>
  );
}

export default CreatePlanningCaledarComponent;

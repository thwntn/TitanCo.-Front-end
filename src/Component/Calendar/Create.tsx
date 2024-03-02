import { useEffect } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { colors } from "./Data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import {
  calendarSlice,
  createRequest,
  planningGetRequest,
} from "../../Store/Reducer/Calendar/Planning";
import moment from "moment";

interface IProps {
  day: string;
  hour: string;
}

function CreatePlanning(props: IProps) {
  const dispatch = useDispatch<AppDispatch>();
  const calendarState = useSelector(
    (rootState: RootState) => rootState.calendarState
  );

  function close() {
    dispatch(calendarSlice.actions.select(String()));
  }

  function updateCreate(key: string, value: string | boolean) {
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
    close();
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
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-[10px] z-50 bg-[#0000001f]">
      <div
        className="flex flex-col gap-8 p-[24px] bg-white custom-shadow rounded-2xl min-w-[456px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <span>Mô tả</span>
          </div>
          <Input
            onChange={(event) => updateCreate("name", event.target.value)}
            className="w-[312px]"
            type="text"
            placeholder="@Mô tả công việc..."
          />
        </div>
        <div className="flex flex-col gap-4">
          <span>Màu sắc</span>
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
            <span>Thời gian bắt đầu</span>
            <Input
              defaultValue={props.hour}
              type="time"
              onChange={(event) => updateCreate("from", event.target.value)}
            />
          </div>
          <div className="flex w-full flex-col gap-4">
            <span>Thời gian kết thúc</span>
            <Input
              defaultValue={props.hour}
              onChange={(event) => updateCreate("to", event.target.value)}
              type="time"
            />
          </div>
        </div>
        <nav className="flex flex-col gap-4 py-4">
          <span>Cài đặt</span>
          <div className="flex gap-4">
            <button
              style={{
                border: calendarState.create?.setEmail
                  ? `1px solid`
                  : undefined,
              }}
              className="p-4 border rounded-xl"
              onClick={() =>
                updateCreate("setEmail", !calendarState.create?.setEmail)
              }
            >
              Gửi mail thông báo
            </button>
            <button
              style={{
                border: calendarState.create?.setNotification
                  ? `1px solid`
                  : undefined,
              }}
              onClick={() =>
                updateCreate(
                  "setNotification",
                  !calendarState.create?.setNotification
                )
              }
              className="p-4 border rounded-xl"
            >
              Thông báo khi hết hạn
            </button>
          </div>
        </nav>
        <nav className="flex gap-4 justify-end">
          <Button onClick={close} mode="warning">
            Đóng
          </Button>
          <Button onClick={create} icon="add" mode="default">
            Tạo mới
          </Button>
        </nav>
      </div>
    </div>
  );
}

export default CreatePlanning;

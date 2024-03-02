import { useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "../../UI/Calendar/Calendar";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/Store";
import {
  calendarSlice,
  planningGetRequest,
} from "../../Store/Reducer/Calendar/Planning";
import TablePlanningComponent from "./Table";
import moment from "moment";
import InfoComponent from "./Info";
import Name from "../../UI/Name/Name";
import Select, { Item } from "../../UI/Select/Select";
import Frame from "../../UI/Frame/Frame";

const mode: Item[] = [
  {
    name: "Day",
    id: 1,
  },
  {
    name: "Month",
    id: 1,
  },
  {
    name: "Week",
    id: 1,
  },
  {
    name: "All",
    id: 1,
  },
];

function PlanningCalendarComponent() {
  const now = new Date();
  const dispatch = useDispatch<AppDispatch>();

  function changeTime(time: Date) {
    dispatch(calendarSlice.actions.currentTime(time));
    dispatch(planningGetRequest(moment.utc(time).week()));
  }

  useEffect(() => {
    changeTime(now);
  }, []);
  return (
    <Frame>
      <Name title="Planning"></Name>
      <div className="w-[156px]">
        <Select items={mode} value="Mode view" onSelect={Function}></Select>
      </div>
      <div className="w-full flex gap-8">
        <Calendar
          dateTime={now}
          updateDateTime={(event) => changeTime(event)}
        ></Calendar>
        <InfoComponent></InfoComponent>
      </div>
      <div className="flex">
        <div className="rounded-3xl overflow-hidden custom-border">
          <TablePlanningComponent />
        </div>
      </div>
    </Frame>
  );
}

export default PlanningCalendarComponent;

{
}

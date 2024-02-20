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
    <div className="custom-frame">
      <Name title="Group"></Name>
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
    </div>
  );
}

export default PlanningCalendarComponent;

{
}

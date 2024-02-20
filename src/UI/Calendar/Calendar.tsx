import { Calendar as ReactCalendar } from "react-calendar";
import "./Calendar.scss";

interface IProps {
  dateTime: Date;
  updateDateTime: (dateTime: Date) => void;
}

function Calendar(props: IProps) {
  function updateWeekOfYear(value: string) {
    props.updateDateTime(new Date(value));
  }
  return (
    <ReactCalendar
      value={props.dateTime}
      onChange={(value) =>
        updateWeekOfYear(String(value && value.toLocaleString()))
      }
    ></ReactCalendar>
  );
}

export default Calendar;

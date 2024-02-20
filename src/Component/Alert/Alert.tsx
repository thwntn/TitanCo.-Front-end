import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import BellAlertIcon from "../../Assets/Icon/Alert/Bell.svg";
import themes from "./_.module.scss";

function AlertComponent() {
  const alert = useSelector((root: RootState) => root.mainState);

  return (
    <ul className={themes.list}>
      {alert.alerts.map((item, index) => (
        <li key={index} className={themes.item}>
          <img src={BellAlertIcon} className={themes.icon} />
          <div>{item}</div>
        </li>
      ))}
    </ul>
  );
}

export default AlertComponent;

import EmptyIcon from "../../Assets/Icon/Empty/Empty.svg";
import themes from "./Empty.module.scss";

function Empty() {
  return (
    <div className={themes.frame}>
      <img src={EmptyIcon} className={themes.icon} />
      <div className={themes.content}>
        <span className={themes.title}>Empty</span>
        <p className={themes.content}>Not found</p>
      </div>
    </div>
  );
}

export default Empty;

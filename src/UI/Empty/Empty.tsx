import EmptyImage from "../../Assets/Icon/Empty/Empty.gif";
import themes from "./Empty.module.scss";

function Empty() {
  return (
    <div className={themes.frame}>
      <img src={EmptyImage} className={themes.icon} />
      <span className={themes.title}>Oops</span>
      <p className={themes.content}>Not found any file</p>
    </div>
  );
}

export default Empty;

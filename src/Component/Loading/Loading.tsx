import LoadingImage from "../../Assets/Image/Loading/Loading.gif";
import themes from "./Loading.module.scss";

function LoadingComponent() {
  return (
    <div className={themes.frame}>
      <img src={LoadingImage} className={themes.img}></img>
    </div>
  );
}

export default LoadingComponent;

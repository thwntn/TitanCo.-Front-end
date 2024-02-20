import ConfirmImage from "../../Assets/Image/Confirm/Confirm.png";
import Button from "../../UI/Button/Button";
import themes from "./Confirm.module.scss";

interface IProps {
  confirm: () => void;
  close: () => void;
}

function ConfirmComponent(props: IProps) {
  return (
    <div className={themes.frame}>
      <div className={themes.wrapper}>
        <div className={themes.content}>
          <img className={themes.image} src={ConfirmImage} />
          <span>Are you sure, action can not roll back</span>
        </div>
        <nav className={themes.buttonGroup}>
          <Button mode="warning" onClick={props.close}>
            Cancel
          </Button>
          <Button mode="default" icon="next" onClick={props.confirm}>
            Confirm
          </Button>
        </nav>
      </div>
    </div>
  );
}

export default ConfirmComponent;

import { useSelector, useStore } from "react-redux";
import ConfirmComponent from "../Component/Confirm/Confirm";
import { RootState } from "../Store/Store";
import { mainSlice } from "../Store/Reducer/Main/Main";

function ConfirmContainer() {
  const store = useStore();
  const object = useSelector((store: RootState) => store.mainState.confirm);

  function close() {
    store.dispatch(mainSlice.actions.confirm(null));
  }

  function confirm() {
    store.dispatch(mainSlice.actions.confirm(null));
    if (object) object.cb();
  }
  return (
    object && (
      <ConfirmComponent close={close} confirm={confirm}></ConfirmComponent>
    )
  );
}

export default ConfirmContainer;

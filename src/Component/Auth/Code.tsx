import KeyAuth from "../../Assets/Icon/Auth/Key.svg";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Icon from "../../UI/Icon/Icon";
import { useNavigate } from "react-router-dom";
import { Redirect } from "../../Shared/Redirect";
import TopbarAuthComponent from "./Topbar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import {
  confirmCodeRequest,
  identitySlice,
} from "../../Store/Reducer/Identity/User";

function ConfirmCodeComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const identityState = useSelector(
    (rootState: RootState) => rootState.identityState
  );

  function setLocal(key: string, value: string) {
    dispatch(
      identitySlice.actions.setLocalObject({
        ...identityState.localObject,
        [key]: value,
      })
    );
  }

  function confirmCode() {
    dispatch(confirmCodeRequest(identityState.localObject));
    // .then(() =>
    //   navigate(Redirect.CONFIRM_CODE)
    // );
  }

  return (
    <div className="custom-shadow rounded-xl flex justify-center items-center w-full h-[100vh]">
      <TopbarAuthComponent />
      <div className="flex custom-shadow flex-col gap-12 p-16 z-10 bg-white rounded-3xl">
        <form
          onClick={(event) => event.preventDefault()}
          className="flex flex-col h-fit gap-10 w-[412px]"
        >
          <span className="text mb-8 text-4xl font-bold text-[#FB5A50]">
            Confirm Code
          </span>
          <div className="flex gap-2">
            <span>Do you have account?</span>
            <span
              className="text block cursor-pointer text-blue-600 underline"
              onClick={() => navigate(Redirect.SIGN_UP)}
            >
              Signup
            </span>
          </div>
          <div className="grid gap-5">
            <div className="relative flex items-center">
              <Icon className="absolute left-[6px]" src={KeyAuth}></Icon>
              <Input
                className="pl-[38px] w-full"
                placeholder="Code from email"
                autoComplete="nofill"
                type="code"
                onChange={(event) => setLocal("code", event.target.value)}
              ></Input>
            </div>
          </div>
          <Button
            onClick={confirmCode}
            className="w-full py-8"
            mode="default"
            icon="next"
          >
            Signup
          </Button>
        </form>
      </div>
    </div>
  );
}

export default ConfirmCodeComponent;

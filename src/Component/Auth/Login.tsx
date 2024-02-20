import EmailAuth from "../../Assets/Icon/Auth/Email.svg";
import GoogleAuthIcon from "../../Assets/Icon/Auth/Google.svg";
import FacebookAuthIcon from "../../Assets/Icon/Auth/Facebook.svg";
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
  UserStatus,
  identitySlice,
  loginRequest,
} from "../../Store/Reducer/Identity/User";
import { AxiosResponse } from "axios";
import { User } from "../../Store/Reducer/Identity/Model";

function LoginComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const identityState = useSelector(
    (rootState: RootState) => rootState.identityState
  );

  function gotoSignup() {
    navigate(`/${Redirect.SIGN_UP}`);
  }

  function setLocal(key: string, value: string) {
    dispatch(
      identitySlice.actions.setLocalObject({
        ...identityState.localObject,
        [key]: value,
      })
    );
  }

  function signup() {
    dispatch(loginRequest(identityState.localObject)).then((response) => {
      if (
        (response.payload as AxiosResponse<User>).data.status ==
        UserStatus.Valid
      )
        navigate(`/${Redirect.CONFIRM_CODE}`);
      else navigate(`${Redirect.APP}/${Redirect.HOME}`);
    });
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
            Let's get started
          </span>
          <div className="flex gap-2">
            <span>Do you have account?</span>
            <span
              className="text block cursor-pointer text-blue-600 underline"
              onClick={gotoSignup}
            >
              Signup
            </span>
          </div>
          <div className="grid gap-5">
            <div className="relative flex items-center">
              <Icon className="absolute left-[6px]" src={EmailAuth}></Icon>
              <Input
                className="pl-[38px] w-full"
                placeholder="_nttasv@gmail.com"
                autoComplete="nofill"
                type="text"
                onChange={(event) => setLocal("username", event.target.value)}
              ></Input>
            </div>
            <div className="relative flex items-center">
              <Icon className="absolute left-[6px]" src={KeyAuth}></Icon>
              <Input
                className="pl-[38px] w-full"
                placeholder="******"
                autoComplete="nofill"
                type="password"
                onChange={(event) => setLocal("password", event.target.value)}
              ></Input>
            </div>
          </div>
          <span className="text-[10px] text text-red-400 text-right underline">
            Forget password
          </span>
          <Button
            onClick={signup}
            className="w-full py-8"
            mode="default"
            icon="next"
          >
            Signup
          </Button>
          <nav className="grid gap-4">
            <span className="font-bold">Other</span>
            <div className="cursor-pointer hover:bg-gray-100 custom-border flex items-center gap-4 p-2 rounded-md bg-white">
              <Icon size={28} src={FacebookAuthIcon}></Icon>
              <span>Login with Facebook</span>
            </div>
            <div className="cursor-pointer hover:bg-gray-100 custom-border flex items-center gap-4 p-2 rounded-md bg-white">
              <Icon size={28} src={GoogleAuthIcon}></Icon>
              <span>Login with Google</span>
            </div>
          </nav>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;

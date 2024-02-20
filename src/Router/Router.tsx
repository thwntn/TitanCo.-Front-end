import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Redirect } from "../Shared/Redirect";
import { Provider } from "react-redux";
import { store } from "../Store/Store";
import AppContainer from "../Container/App/App";
import MainContainer from "../Container/Main";
import LoginContainer from "../Container/Login";
import NoteContainer from "../Container/Note/Note";
import ProfileContainer from "../Container/Profile";
import ArchiveContainer from "../Container/Note/Archive";
import TrashContainer from "../Container/Note/Trash";
import ChooseContainer from "../Container/Auth/Choose";
import SignupContainer from "../Container/Signup";
import ConfirmCodeComponent from "../Component/Auth/Code";
import HomeStogareComponent from "../Component/Stogare/Home";
import GroupStogareComponent from "../Component/Stogare/Group/Group";
import StogareComponent from "../Component/Stogare/Stogare/Stogare";
import PlanningCalendarComponent from "../Component/Calendar/Planning";
import GeminiComponent from "../Component/Gemini/Gemini";
import NewFolderStogareComponent from "../Component/Stogare/Stogare/NewFolder";
import UploadStogareComponent from "../Component/Stogare/Stogare/Upload/Upload";
import MoveStogareComponent from "../Component/Stogare/Stogare/Move";
import HomeComponent from "../Component/Home/Home";
import StogareGroupComponent from "../Component/Stogare/Group/Stogare";

function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={Redirect.MAIN} element={<MainContainer />}>
            <Route path={Redirect.CHOOSE} element={<ChooseContainer />}></Route>
            <Route
              path={Redirect.CONFIRM_CODE}
              element={<ConfirmCodeComponent />}
            ></Route>
            <Route path={Redirect.LOGIN} element={<LoginContainer />}></Route>
            <Route
              path={Redirect.SIGN_UP}
              element={<SignupContainer />}
            ></Route>
            <Route path={Redirect.APP} element={<AppContainer />}>
              <Route path={Redirect.HOME} element={<HomeComponent />}></Route>
              <Route
                path={Redirect.PROFILE}
                element={<ProfileContainer />}
              ></Route>
              <Route path={Redirect.NOTE} element={<NoteContainer />}></Route>
              <Route
                path={Redirect.ARCHIVE}
                element={<ArchiveContainer />}
              ></Route>
              <Route path={Redirect.TRASH} element={<TrashContainer />}></Route>
              <Route path={Redirect.STOGARE}>
                <Route
                  path={`${Redirect.FILE}/:stogareId`}
                  element={<StogareComponent />}
                ></Route>
                <Route
                  path={Redirect.CREATE}
                  element={<NewFolderStogareComponent />}
                ></Route>
                <Route
                  path={`${Redirect.MOVE}/:stogareId`}
                  element={<MoveStogareComponent />}
                ></Route>
                <Route
                  path={Redirect.UPLOAD}
                  element={<UploadStogareComponent />}
                ></Route>
              </Route>
              <Route
                path={Redirect.GROUP_STOGARE + "/:groupId"}
                element={<StogareGroupComponent />}
              ></Route>
              <Route
                path={Redirect.GROUP}
                element={<GroupStogareComponent />}
              ></Route>
              <Route
                path={Redirect.OVERVIEW}
                element={<HomeStogareComponent />}
              ></Route>
              <Route
                path={Redirect.CALENDAR}
                element={<PlanningCalendarComponent />}
              ></Route>
              <Route
                path={Redirect.Gemini}
                element={<GeminiComponent />}
              ></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Router;

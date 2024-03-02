import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Redirect } from "../Shared/Redirect";
import { Provider } from "react-redux";
import { store } from "../Store/Store";
import AppContainer from "../Container/App/App";
import MainContainer from "../Container/Main";
import LoginContainer from "../Container/Login";
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
import ListNoteContainer from "../Container/Note/List";
import EditorNoteComponent from "../Component/Note/Editor";
import CreateGroup from "../Component/Stogare/Group/Create";
import ManagerGroup from "../Component/Stogare/Group/Manager";
import InviteMemberGroup from "../Component/Stogare/Group/InviteMember";
import RequestJoinGroup from "../Component/Stogare/Group/Manager/RequestJoinGroup";
import TransferStogare from "../Component/Stogare/Transfer/Transfer";
import Invoice from "../Component/Invoice/Invoice";
import ListInvoice from "../Component/Invoice/List";
import InfoInvoice from "../Component/Invoice/Info";
import Product from "../Component/Product/Product";
import ListProduct from "../Component/Product/List";
import CreateProduct from "../Component/Product/Create";
import CreateInvoice from "../Component/Invoice/Create";

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
              <Route path={Redirect.NOTE}>
                <Route
                  path={Redirect.EDIT + "/:noteId"}
                  element={<EditorNoteComponent />}
                ></Route>
                <Route
                  path={Redirect.LIST}
                  element={<ListNoteContainer />}
                ></Route>
              </Route>
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
                  path={`${Redirect.TRANSFER}`}
                  element={<TransferStogare />}
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
              <Route path={Redirect.GROUP}>
                <Route
                  path={Redirect.MANAGER + "/:groupId"}
                  element={<ManagerGroup />}
                ></Route>
                <Route
                  path={Redirect.REQUEST}
                  element={<RequestJoinGroup />}
                ></Route>
                <Route
                  path={Redirect.INVITE + "/:groupId"}
                  element={<InviteMemberGroup />}
                ></Route>
                <Route path={Redirect.CREATE} element={<CreateGroup />}></Route>
                <Route path={Redirect.CREATE} element={<CreateGroup />}></Route>
                <Route
                  path={Redirect.LIST}
                  element={<GroupStogareComponent />}
                ></Route>
                <Route
                  path={Redirect.LIST}
                  element={<GroupStogareComponent />}
                ></Route>
              </Route>
              <Route
                path={Redirect.OVERVIEW}
                element={<HomeStogareComponent />}
              ></Route>
              <Route
                path={Redirect.CALENDAR}
                element={<PlanningCalendarComponent />}
              ></Route>
              <Route
                path={Redirect.GEMINI}
                element={<GeminiComponent />}
              ></Route>
              <Route path={Redirect.INVOICE} element={<Invoice />}>
                <Route
                  path={Redirect.CREATE}
                  element={<CreateInvoice />}
                ></Route>
                <Route path={Redirect.LIST} element={<ListInvoice />}></Route>
                {/* <Route path={Redirect.INFO} element={<InfoInvoice />}></Route> */}
              </Route>
              <Route path={Redirect.PRODUCT} element={<Product />}>
                <Route
                  path={Redirect.CREATE}
                  element={<CreateProduct />}
                ></Route>
                <Route path={Redirect.LIST} element={<ListProduct />}></Route>
                {/* <Route path={Redirect.INFO} element={<InfoInvoice />}></Route> */}
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default Router;

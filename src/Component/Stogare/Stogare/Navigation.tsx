import Icon from "../../../UI/Icon/Icon";
import FileAddStogareIcon from "../../../Assets/Icon/Stogare/FileAdd.svg";
import FolderAddStogareIcon from "../../../Assets/Icon/Stogare/FolderAdd.svg";
import { useNavigate, useParams } from "react-router-dom";
import { Redirect } from "../../../Shared/Redirect";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import {
  ROOT_FOLDER,
  stogareSlice,
} from "../../../Store/Reducer/Stogare/Stogare";
import { stogareRequest } from "../../../Store/Reducer/Stogare/Thunk";

function NavigationStogareComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();
  const params = useParams();

  function gotoCreateFolder() {
    navigation(`../${Redirect.CREATE}?stogareId=${params.stogareId}`);
  }

  function gotoUpload() {
    navigation(`../${Redirect.UPLOAD}?stogareId=${params.stogareId}`);
  }

  return (
    <div className="flex gap-4 rounded-md bg-gray-50 p-3">
      <button className="group relative flex items-center gap-4">
        <span onClick={gotoCreateFolder}>
          <Icon src={FolderAddStogareIcon}></Icon>
        </span>
        <span onClick={gotoUpload}>
          <Icon src={FileAddStogareIcon}></Icon>
        </span>
      </button>
      <button
        className="rounded-md border border-gray-100 bg-white p-2 px-4 hover:bg-gray-100"
        onClick={() => dispatch(stogareRequest(ROOT_FOLDER))}
      >
        Refesh
      </button>
      <button
        className="rounded-md border border-gray-100 bg-white p-2 px-4 hover:bg-gray-100"
        onClick={() => dispatch(stogareSlice.actions.sortByName())}
      >
        Sort by name
      </button>
      <button
        className="rounded-md border border-gray-100 bg-white p-2 px-4 hover:bg-gray-100"
        onClick={() => dispatch(stogareSlice.actions.newest())}
      >
        Newest
      </button>
      <button
        className="rounded-md border border-gray-100 bg-white p-2 px-4 hover:bg-gray-100"
        onClick={() => dispatch(stogareSlice.actions.latest())}
      >
        Latest
      </button>
    </div>
  );
}

export default NavigationStogareComponent;

import Icon from "../../../UI/Icon/Icon";
import AddGroupIcon from "../../../Assets/Icon/Stogare/GroupAdd.svg";
import { useNavigate } from "react-router-dom";
import { Redirect } from "../../../Shared/Redirect";

function SideGroupComponent() {
  const navigation = useNavigate();

  function gotoCreatePage() {
    navigation(`${Redirect.APP}/${Redirect.GROUP}/${Redirect.CREATE}`);
  }

  return (
    <>
      <div className="flex gap-4 rounded-md bg-gray-50 p-3">
        <button className="group relative flex items-center gap-4">
          <span onClick={gotoCreatePage}>
            <Icon src={AddGroupIcon}></Icon>
          </span>
        </button>
        <button className="rounded-md border border-gray-100 bg-white p-2 px-4 hover:bg-gray-100">
          Refresh
        </button>
        <button className="rounded-md border border-gray-100 bg-white p-2 px-4 hover:bg-gray-100">
          Sort by name
        </button>
        <button className="rounded-md border border-gray-100 bg-white p-2 px-4 hover:bg-gray-100">
          Newest
        </button>
        <button className="rounded-md border border-gray-100 bg-white p-2 px-4 hover:bg-gray-100">
          Lastest
        </button>
      </div>
    </>
  );
}

export default SideGroupComponent;

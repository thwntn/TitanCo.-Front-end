import Icon from "../../../UI/Icon/Icon";
import AddGroupIcon from "../../../Assets/Icon/Stogare/GroupAdd.svg";

function SideGroupComponent() {
  function CreateGroup() {
    // Services.Group.Create(_NAME_DEFAULT);
  }
  return (
    <>
      <div className="flex gap-4 rounded-md bg-gray-50 p-3">
        <button className="group relative flex items-center gap-4">
          <span onClick={CreateGroup}>
            <Icon src={AddGroupIcon}></Icon>
          </span>
        </button>
        <button className="rounded-md border border-gray-100 bg-white p-2 px-4 hover:bg-gray-100">
          Sắp xếp theo tên
        </button>
        <button className="rounded-md border border-gray-100 bg-white p-2 px-4 hover:bg-gray-100">
          Mới nhất
        </button>
        <button className="rounded-md border border-gray-100 bg-white p-2 px-4 hover:bg-gray-100">
          Cũ hơn
        </button>
      </div>
    </>
  );
}

export default SideGroupComponent;

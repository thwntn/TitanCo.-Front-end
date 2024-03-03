import { Outlet } from "react-router-dom";
import Frame from "../../UI/Frame/Frame";

function Invoice() {
  return (
    <Frame className="bg-[#F6Fsss8FA]">
      <Outlet />
    </Frame>
  );
}

export default Invoice;

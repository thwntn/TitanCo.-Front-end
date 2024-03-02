import { Outlet } from "react-router-dom";
import Frame from "../../UI/Frame/Frame";

function Product() {
  return (
    <Frame>
      <Outlet></Outlet>
    </Frame>
  );
}

export default Product;

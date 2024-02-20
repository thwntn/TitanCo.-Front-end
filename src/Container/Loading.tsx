import { useSelector } from "react-redux";
import LoadingComponent from "../Component/Loading/Loading";
import { RootState } from "../Store/Store";

function LoadingContainer() {
  const loading = useSelector((store: RootState) => store.mainState.loading);
  return loading && <LoadingComponent></LoadingComponent>;
}

export default LoadingContainer;

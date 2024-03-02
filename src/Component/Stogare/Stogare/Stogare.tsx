import FolderStogareComponent from "../Folder";
import FileStogareComponent from "../File";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { stogareSlice } from "../../../Store/Reducer/Stogare/Stogare";
import NavigationStogareComponent from "./Navigation";
import Name from "../../../UI/Name/Name";
import { useParams } from "react-router-dom";
import { stogareRequest } from "../../../Store/Reducer/Stogare/Thunk";
import Frame from "../../../UI/Frame/Frame";

function StogareComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();

  useEffect(() => {
    const stogareId = String(params.stogareId);
    dispatch(stogareSlice.actions.current(stogareId));
    dispatch(stogareRequest(stogareId));
  }, []);
  return (
    <Frame>
      <Name title="File from stogare"></Name>
      <NavigationStogareComponent></NavigationStogareComponent>
      <div className="flex w-full flex-col items-center gap-12">
        <div className="w-full">
          <span className="text mb-6 block text-2xl font-bold">Folder</span>
          <FolderStogareComponent></FolderStogareComponent>
        </div>
        <div className="w-full">
          <span className="text mb-6 block text-2xl font-bold">
            <b className="text-2xl">Files</b>
          </span>
          <FileStogareComponent></FileStogareComponent>
        </div>
      </div>
    </Frame>
  );
}

export default StogareComponent;

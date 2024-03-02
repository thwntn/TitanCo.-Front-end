import FileStogareIcon from "../../../../Assets/Icon/Stogare/File.svg";
import UploadStogareIcon from "../../../../Assets/Icon/Stogare/Upload.svg";
import themes from "./_.module.scss";
import Name from "../../../../UI/Name/Name";
import { useEffect, useState } from "react";
import Button from "../../../../UI/Button/Button";
import {
  ROOT_FOLDER,
  StogareType,
  byteToSize,
  stogareSlice,
} from "../../../../Store/Reducer/Stogare/Stogare";
import moment from "moment";
import Empty from "../../../../UI/Empty/Empty";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../Store/Store";
import { Stogare } from "../../../../Store/Reducer/Stogare/Model";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import Select from "../../../../UI/Select/Select";
import { mainSlice } from "../../../../Store/Reducer/Main/Main";
import { Message } from "../../../../Shared/Message";
import { Redirect } from "../../../../Shared/Redirect";
import {
  allFolderRequest,
  stogareRequest,
  uploadFileRequest,
} from "../../../../Store/Reducer/Stogare/Thunk";
import Frame from "../../../../UI/Frame/Frame";

function UploadStogareComponent() {
  const [files, setFiles] = useState<File[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();
  const [select, setSelect] = useState<Stogare>();
  const [search] = useSearchParams();
  const stogares = useSelector(
    (rootState: RootState) => rootState.stogareState
  );
  const folders = stogares.stogares.filter(
    (item) => item.type == StogareType.Folder
  );

  function listFolders() {
    const items = [
      { id: ROOT_FOLDER, name: "Root", displayName: "Root" },
      ...folders.map((item) => ({ ...item, name: item.displayName })),
    ];
    return items;
  }

  function upload() {
    files.map(async (file) => {
      const formData = new FormData();
      formData.append(file.name, file);
      dispatch(
        uploadFileRequest({ stogareId: stogares.current, form: formData })
      ).then(function () {
        dispatch(stogareRequest(stogares.current));
        dispatch(mainSlice.actions.alert(Message.UPLOAD_SUCESS));
      });
    });
    navigation(`../${Redirect.FILE}/${stogares.current}`);
  }

  function onSelect(item: Stogare) {
    dispatch(stogareSlice.actions.current(item.id));
    setSelect(item);
  }

  useEffect(function () {
    dispatch(allFolderRequest()).then(function (response) {
      const stogateId = search.get("stogareId");
      const responseData = response.payload as AxiosResponse<Stogare[]>;
      // @Query set
      const folder = responseData.data.find(
        (item) => item.id == String(stogateId)
      );
      if (stogateId && folder) {
        dispatch(stogareSlice.actions.current(folder.id));
        setSelect(folder);
      }
    });
  }, Array.from({ length: 0 }));
  return (
    <Frame>
      <Name title="Upload file"></Name>
      <div className=" relative select-none cursor-pointer">
        <Select
          items={listFolders()}
          value={select?.displayName ?? "Select one option"}
          onSelect={function (item: Stogare) {
            onSelect(item);
          }}
        ></Select>
      </div>
      <div className="flex gap-12">
        <div className="relative flex h-[356px] min-w-[442px] flex-1 items-center justify-center rounded-xl border-2 border-dotted border-gray-200">
          <div className="flex flex-col gap-4 items-center justify-center">
            <img src={UploadStogareIcon} className="w-[32px] opacity-50" />
            <span>Drop file from here</span>
          </div>
          <input
            className={
              "color-[transparent] ::file-selector-button absolute bg-transparent to-transparent " +
              themes.input
            }
            multiple={true}
            type="file"
            onChange={(event) => setFiles(Array.from(event.target.files || []))}
          />
        </div>
        <ul className="flex flex-col gap-4 custom-border py-6 px-8 w-full rounded-2xl">
          {files.length == 0 && <Empty></Empty>}
          {files.map((item, index) => (
            <li key={index} className="py-1 flex items-center gap-8 w-full">
              <img src={FileStogareIcon} className="w-[48px]" />
              <div className="flex flex-col text-[12px] text-gray-500 gap-2 w-full">
                <span className="font-bold">{item.name}</span>
                <span>{byteToSize(item.size)} MB</span>
                <span>{item.type}</span>
                <span>
                  {moment(item.lastModified).format("YYYY-MM-DD, dddd HH:mm")}
                </span>
                <div className="w-full h-[4px] bg-[#e7e7e7]"></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Button mode="default" icon="next" onClick={upload}>
        Upload
      </Button>
    </Frame>
  );
}

export default UploadStogareComponent;

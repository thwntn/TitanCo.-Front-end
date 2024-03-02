import { useDispatch, useSelector } from "react-redux";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import Name from "../../../UI/Name/Name";
import { AppDispatch, RootState } from "../../../Store/Store";
import {
  ROOT_FOLDER,
  StogareType,
  stogareSlice,
} from "../../../Store/Reducer/Stogare/Stogare";
import { useEffect, useState } from "react";
import Select from "../../../UI/Select/Select";
import { Stogare } from "../../../Store/Reducer/Stogare/Model";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AxiosResponse } from "axios";
import { mainSlice } from "../../../Store/Reducer/Main/Main";
import { Message } from "../../../Shared/Message";
import { Redirect } from "../../../Shared/Redirect";
import {
  allFolderRequest,
  createFolder,
} from "../../../Store/Reducer/Stogare/Thunk";
import Frame from "../../../UI/Frame/Frame";

function NewFolderStogareComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();
  const [select, setSelect] = useState<Stogare>();
  const [search] = useSearchParams();
  const [name, setName] = useState<string>();
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

  function onSelect(item: Stogare) {
    dispatch(stogareSlice.actions.current(item.id));
    setSelect(item);
  }

  function create() {
    name &&
      dispatch(createFolder({ parent: stogares.current, name })).then(
        function () {
          dispatch(mainSlice.actions.alert(Message.CREATE_SUCESS));
          navigation(`../${Redirect.FILE}/${stogares.current}`);
        }
      );
  }

  useEffect(function () {
    dispatch(allFolderRequest()).then(function (response: any) {
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
      <Name title="Create new folder"></Name>
      <span>Add to folder</span>
      <div className=" relative select-none cursor-pointer">
        <Select
          items={listFolders()}
          value={select?.displayName ?? "Select one option"}
          onSelect={function (item: Stogare) {
            onSelect(item);
          }}
        ></Select>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-4"
      >
        <Input
          placeholder="Name of foler"
          onChange={(event) => setName(event.target.value)}
        ></Input>
        <Button mode="default" icon="add" onClick={create}>
          Create
        </Button>
      </form>
    </Frame>
  );
}

export default NewFolderStogareComponent;

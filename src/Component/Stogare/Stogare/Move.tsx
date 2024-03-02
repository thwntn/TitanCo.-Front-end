import { useDispatch, useSelector } from "react-redux";
import Button from "../../../UI/Button/Button";
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
import { useNavigate, useParams } from "react-router-dom";
import {
  destinationRequest,
  moveRequest,
  stogareRequest,
} from "../../../Store/Reducer/Stogare/Thunk";
import { Redirect } from "../../../Shared/Redirect";
import Frame from "../../../UI/Frame/Frame";

function MoveStogareComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigate();
  const [select, setSelect] = useState<Stogare>();
  const params = useParams();
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

  function move() {
    select &&
      dispatch(
        moveRequest({
          stogareId: String(params.stogareId),
          destinationId: select.id,
        })
      ).then(function () {
        dispatch(stogareRequest(select.id));
        navigation(`../${Redirect.FILE}/${select.id}`);
      });
  }

  useEffect(function () {
    dispatch(destinationRequest(String(params.stogareId)));
  }, Array.from({ length: 0 }));
  return (
    <Frame>
      <Name title="Move stogare"></Name>
      <span className="font-bold">Move to folder</span>
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
        <Button mode="default" icon="add" onClick={move}>
          Move
        </Button>
      </form>
    </Frame>
  );
}

export default MoveStogareComponent;

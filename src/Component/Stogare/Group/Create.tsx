import { useState } from "react";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import Name from "../../../UI/Name/Name";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import { createGroup, groupRequest } from "../../../Store/Reducer/Group/Thunk";
import { useNavigate } from "react-router-dom";
import { Redirect } from "../../../Shared/Redirect";
import Frame from "../../../UI/Frame/Frame";

function CreateGroup() {
  const navigation = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState<string>("");

  function create() {
    dispatch(createGroup({ groupName: name })).then(function () {
      dispatch(groupRequest()).then(function () {
        navigation(`${Redirect.APP}/${Redirect.GROUP}/${Redirect.LIST}`);
      });
    });
  }

  return (
    <Frame>
      <Name title="Create new group" />
      <Input
        placeholder="Group Name..."
        onChange={(event) => setName(event.target.value)}
      ></Input>
      <Button mode="default" icon="next" onClick={create}>
        Create
      </Button>
    </Frame>
  );
}

export default CreateGroup;

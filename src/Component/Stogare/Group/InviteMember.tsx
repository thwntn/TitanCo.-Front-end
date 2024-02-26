import { useState } from "react";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
import Name from "../../../UI/Name/Name";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../Store/Store";
import {
  addMember,
  createGroup,
  groupRequest,
} from "../../../Store/Reducer/Group/Thunk";
import { useNavigate, useParams } from "react-router-dom";
import { Redirect } from "../../../Shared/Redirect";

function InviteMemberGroup() {
  const params = useParams();
  const navigation = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState<string>("");

  function create() {
    dispatch(
      addMember({ emails: [email], groupId: String(params.groupId) })
    ).then(function () {
      dispatch(groupRequest()).then(function () {
        navigation(`${Redirect.APP}/${Redirect.GROUP}/${Redirect.LIST}`);
      });
    });
  }

  return (
    <div className="custom-frame">
      <Name title="Invite Member" />
      <Input
        placeholder="Email..."
        onChange={(event) => setEmail(event.target.value)}
      ></Input>
      <Button mode="default" icon="next" onClick={create}>
        Invite
      </Button>
    </div>
  );
}

export default InviteMemberGroup;

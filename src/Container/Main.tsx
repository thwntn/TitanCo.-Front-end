import { Outlet } from "react-router-dom";
import React from "react";
import ConfirmContainer from "./Confirm";
import LoadingContainer from "./Loading";
import AlertComponent from "../Component/Alert/Alert";

function MainContainer() {
  return (
    <React.Fragment>
      <AlertComponent></AlertComponent>
      <ConfirmContainer></ConfirmContainer>
      <LoadingContainer></LoadingContainer>
      <Outlet />
    </React.Fragment>
  );
}

export default MainContainer;

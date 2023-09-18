import React, { useState } from "react";
import Login from "../../pages/auth/login";
import Signup from "../../pages/auth/signup";
import SideBar from "../sidebar";

const Auth = ({ setEnable, enable }) => {
  const [viewPage, setViewPage] = useState("login");

  return (
    <SideBar
      width="520"
      onClose={() => setEnable((prev) => !prev)}
      direction="right"
      open={enable}
      duration="900"
    >
      {viewPage === "login" ? (
        <Login setViewPage={setViewPage} setEnable={setEnable} />
      ) : viewPage === "signup" ? (
        <Signup setViewPage={setViewPage} setEnable={setEnable} />
      ) : null}
    </SideBar>
  );
};

export default Auth;

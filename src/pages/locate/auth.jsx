import React from "react";
import SideBar from "../../components/sidebar";
import Login from "../auth/login";
import Signup from "../auth/signup";

const Auth = ({ setEnable, enable, viewPage, setViewPage }) => {
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

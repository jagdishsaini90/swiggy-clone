import React, { useState } from "react";
import "./style.scss";
import Login from "./login";
import Signup from "./signup";

const AuthPageSidebar = ({ enable, setEnable, setViewPage, viewPage }) => {
  if (!enable) {
    return null;
  }
  return (
    <>
      <div onClick={() => setEnable(false)} className="auth-container"></div>
      <div
        style={{ animationName: enable ? "Opensidebar" : "Closesidebar" }}
        className={`sidebar`}
      >
        {viewPage === "login" ? (
          <Login setViewPage={setViewPage} setEnable={setEnable} />
        ) : viewPage === "signup" ? (
          <Signup setViewPage={setViewPage} setEnable={setEnable} />
        ) : null}
      </div>
    </>
  );
};

export default AuthPageSidebar;

import React, { createContext, useContext, useEffect, useState } from "react";
import { APPWRITE_ACCOUNT } from "../appwrite";
import { ID, Query } from "appwrite";
import { toast } from "react-toastify";
import axios from "axios";

export const authContext = createContext(null);

export const useAuthContext = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const signupHelper = async ({ number }) => {
    setMessage(null);
    setError(null);
    setLoading(true);

    try {
      await APPWRITE_ACCOUNT.createPhoneSession(ID.unique(), `+91${number}`)
        .then((user) => {
          setMessage("OTP is sent to you Phone number!");
          setUser({ ...user });
        })
        .catch((error) => setError(error.message));
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const otpHandler = async ({ otp, name, email, number }) => {
    setError(null);
    setLoading(true);

    try {
      await APPWRITE_ACCOUNT.updatePhoneSession(user.userId, otp)
        .then(async (updatedUser) => {
          await axios
            .post(`http://localhost:8000/api/create_user`, {
              name,
              email,
              phone: number,
              updatedUser,
            })
            .then((data) => setUser(data))
            .catch((error) => setError(error.message));
        })
        .catch((error) => {
          setError(error.message);
        });
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  const loginHelper = async ({ number }) => {
    setError(null);
    setLoading(true);
    try {
      APPWRITE_ACCOUNT.createPhoneSession(ID.unique(), `+91${number}`)
        .then((user) => {
          const createdAt = user["$createdAt"];
          console.log(new Date(createdAt), user);
        })
        .catch((error) => setError(error.message));
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [error]);

  useEffect(() => {
    if (message) {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [message]);

  const values = {
    user,
    setUser,
    signupHelper,
    error,
    setError,
    message,
    setMessage,
    otpHandler,
    loading,
    loginHelper,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthProvider;

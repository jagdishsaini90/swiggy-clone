import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import ConfigStore from "./redux/store.js";
import "./index.css";
import AuthProvider from "./utils/authProvider.jsx";
import "react-toastify/dist/ReactToastify.css";

const store = ConfigStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

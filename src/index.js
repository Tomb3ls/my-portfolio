import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyPage from "./pages/mypage";

ReactDOM.render(
  <React.StrictMode>
    <MyPage />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

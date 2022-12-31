import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Loading from "./Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Loading />
  </StrictMode>
);

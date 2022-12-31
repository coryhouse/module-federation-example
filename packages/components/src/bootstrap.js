import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ColorLoading from "./components/color-loading/ColorLoading";
import Button from "./components/button/Button";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ColorLoading />
    <Button />
  </StrictMode>
);

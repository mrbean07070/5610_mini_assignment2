import React from "react";
import ReactDOM from "react-dom/client"; // ✅ 使用 createRoot
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

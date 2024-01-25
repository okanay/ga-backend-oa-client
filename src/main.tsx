import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import { AppProviders } from "@/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders />
  </React.StrictMode>
);

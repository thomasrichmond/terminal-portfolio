import React from "react";
import { createRoot } from "react-dom/client";
import Terminal from "./Terminal.tsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Terminal />
    <Analytics />
  </React.StrictMode>
);

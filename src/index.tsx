import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import React from "react";
import App from "./App.tsx"
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

root.render(
  <StrictMode>
      <App />
  </StrictMode>
);
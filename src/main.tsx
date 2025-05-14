import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TempoDevtools } from "tempo-devtools";
import routes from "tempo-routes";
import { useRoutes } from "react-router-dom";

// Define process.env for Next.js compatibility
window.process = { env: { NODE_ENV: import.meta.env.MODE } };

// Initialize Tempo Devtools
TempoDevtools.init();

// Tempo Routes Component
function TempoRoutes() {
  return import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TempoRoutes />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

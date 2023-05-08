import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Pages
import App from "./App";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";

// React Router for changing pages
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Destination",
    element: <Destination />,
  },
  {
    path: "Crew",
    element: <Crew />,
  },
  {
    path: "Technology",
    element: <Technology />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

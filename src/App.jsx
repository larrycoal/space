import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Destination from "./Component/Destination";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "destination",
      element: <Destination />,
    },
  ]);
  return (
    <div className="main_wrapper">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

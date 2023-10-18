import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Destination from "./Component/Destination";
import Crew from "./Component/Crew";
import Technology from "./Component/Technology";

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
    {
      path: "crew",
      element: <Crew />,
    },
    {
      path: "technology",
      element: <Technology />,
    },
  ]);
  return (
    <div className="main_wrapper">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

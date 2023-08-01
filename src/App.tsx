import React from 'react';
import logo from './logo.svg';
import './App.css';import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




function App() {

  const router = createBrowserRouter([
    {
      path: "/home",
      element: <div>home</div>,
    },
    {
      path: "/",
      element: <div>no home</div>,
    },
    {
      path: "/about",
      element: <div>about</div>,
    },
    {
      path: "/event/149",
      element: <div>event/149</div>,
    },
    {
      path: "/giveaways",
      element: <div>giveaways</div>,
    },
    {
      path: "/live",
      element: <div>live</div>,
    },
    {
      path: "/login",
      element: <div>login</div>,
    },
    {
      path: "/register",
      element: <div>/register</div>,
    },
    {
      path: "/past/116",
      element: <div>past/116</div>,
    },
  

  ]);
  return (
 <div>
   <RouterProvider router={router} />
 </div>
  );
}

export default App;

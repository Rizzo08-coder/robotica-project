import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import Trajectory from "./routes/Trajectory";
import reportWebVitals from './reportWebVitals';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/trajectory/:id",
    element: <Trajectory />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

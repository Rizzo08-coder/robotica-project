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
import {StepJoint} from "./components/StepJoint";
import JointsGrid from "./components/joints_controller/JointsGrid";
import StepModifier from "./components/StepModifier";
import JointPosition from "./components/JointPosition";


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
    <>
        <StepJoint>
            <div className="fixed top-0 left-0 py-4 px-8 bg-gray-200 shadow-md h-screen rounded-r-md">
                <div className="flex justify-center items-center h-screen">
                    <JointsGrid/>
                </div>
            </div>
            <div className="fixed bottom-0 right-0 py-8 px-8 z-50">
                <StepModifier/>
            </div>
        </StepJoint>
        <div className="fixed top-0 right-0 p-4 px-8 bg-gray-200 shadow-md rounded-l-md h-screen ">
            <JointPosition/>
        </div>

        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </>
);

reportWebVitals();

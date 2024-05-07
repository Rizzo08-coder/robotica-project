import React from 'react'
import JointPosition from "../components/JointPosition";
import JointsGrid from "../components/joints_controller/JointsGrid";
import TrajectoryList from "../components/trajectories/TrajectoryList";
import AddTrajectory from "../components/trajectories/AddTrajectory";

function Root(){


    return (
        <>
            <div className="flex justify-center my-12">
                 <img src="/logo.png" alt="logo of application" className="w-64"/>
            </div>
            <div className="fixed top-0 left-0 p-4 bg-gray-200 shadow-md h-screen rounded-md">
                <JointsGrid/>
            </div>
            <div className="fixed top-0 right-0 p-4 bg-gray-200 shadow-md rounded-md h-screen ">
                <JointPosition/>
            </div>
            <div className="justify-center flex mt-8 mb-4">
                <AddTrajectory/>
            </div>
            <div className="flex justify-center mt-2">
                <TrajectoryList/>
            </div>
        </>
    )
}

export default Root

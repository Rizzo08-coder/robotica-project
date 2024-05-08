import React from 'react'
import JointPosition from "../components/JointPosition";
import JointsGrid from "../components/joints_controller/JointsGrid";
import TrajectoryList from "../components/trajectories/TrajectoryList";
import AddTrajectory from "../components/trajectories/AddTrajectory";
import {StepJoint} from "../components/StepJoint"
import StepModifier from "../components/StepModifier";

function Root(){

    return (
        <>
            <div className="flex justify-center my-12">
                <img src="/logo.png" alt="logo of application" className="w-64"/>
            </div>
            <StepJoint>
                <div className="fixed top-0 left-0 py-4 px-8 bg-gray-200 shadow-md h-screen rounded-md">
                    <div className="flex justify-center items-center h-screen">
                       <JointsGrid/>
                    </div>
                </div>
                <div className="fixed bottom-0 right-0 py-8 px-8 z-50">
                    <StepModifier/>
                </div>
            </StepJoint>
            <div className="fixed top-0 right-0 p-4 px-8 bg-gray-200 shadow-md rounded-md h-screen ">
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

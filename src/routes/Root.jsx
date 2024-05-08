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

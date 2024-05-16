import React from 'react'
import TrajectoryList from "../components/trajectories/TrajectoryList";
import AddTrajectory from "../components/trajectories/AddTrajectory";
import LoadingIcon from "../components/LoadingIcon";

function Root(){

    return (
        <>
            <div className="flex justify-center my-12">
                <img src="/logo.png" alt="logo of application" className="w-56 mr-8"/>
                <div className="h-24 w-px bg-gray-900"></div>
                <img src="/unibs-logo.png" alt="logo of application" className="w-24 ml-8"/>
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

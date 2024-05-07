import React from 'react'
import JointPosition from "../components/JointPosition";
import JointsGrid from "../components/joints_controller/JointsGrid";
import TrajectoryList from "../components/trajectories/TrajectoryList";

function Root(){


    return (
        <>
            <div className="flex flex-row ">
               <div className="flex w-3/4 justify-center mt-16">
                   <JointsGrid />
               </div>
               <div className="flex w-1/4 justify-center mt-6">
                  <JointPosition />
               </div>
            </div>
            <div className="flex justify-center mt-12">
                <TrajectoryList />
            </div>
        </>
    )
}

export default Root

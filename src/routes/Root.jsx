import React from 'react'
import JointPosition from "../components/JointPosition";
import JointsGrid from "../components/joints_controller/JointsGrid";

function Root(){


    return (
        <>
            <div className="flex justify-center mt-16">
              <JointsGrid />
            </div>
            <div className="flex justify-center mt-6">
               <JointPosition />
            </div>
        </>
    )
}

export default Root

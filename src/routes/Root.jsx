import React from 'react'
import ButtonMoveJoint from "../components/ButtonMoveJoint"

function Root(){
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="grid grid-cols-3 gap-4">
                    <ButtonMoveJoint  buttonText="Joint1_up"
                                      joint_1={1.0}
                                      joint_2={0.0}
                                      joint_3={0.0}
                                      joint_4={0.0}
                                      joint_5={0.0}
                                      joint_6={0.0}
                                      joint_abs="false"/>
                    <ButtonMoveJoint  buttonText="Joint2_up"
                                      joint_1={0.0}
                                      joint_2={1.0}
                                      joint_3={0.0}
                                      joint_4={0.0}
                                      joint_5={0.0}
                                      joint_6={0.0}
                                      joint_abs="false"/>
                </div>
            </div>
        </>
    )
}

export default Root

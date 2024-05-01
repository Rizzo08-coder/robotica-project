import React from 'react'
import BtnUpDownJoint from "../components/joints_controller/JointController"
import JointController from "../components/joints_controller/JointController";

function Root(){

    const jointControllerValues = [
        { name: "J1", joint_1_plus:2.0, joint_1_minus:-2.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:0.0, joint_6_minus:0.0 },
        { name: "J2", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:2.0, joint_2_minus:-2.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:0.0, joint_6_minus:0.0 },
        { name: "J3", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:2.0, joint_3_minus:-2.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:0.0, joint_6_minus:0.0 },
        { name: "J4", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:2.0, joint_4_minus:-2.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:0.0, joint_6_minus:0.0 },
        { name: "J5", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:2.0, joint_5_minus:-2.0, joint_6_plus:0.0, joint_6_minus:0.0 },
        { name: "J6", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:2.0, joint_6_minus:-2.0 },
    ]

    return (
        <>
            <div className="flex justify-center items-center h-screen mx-6">
                <div className="md:grid md:grid-cols-6 md:gap-12">
                   {jointControllerValues.map((jointValues, index) => (
                        <JointController key={index} name={jointValues.name} {...jointValues} joint_abs="false" />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Root

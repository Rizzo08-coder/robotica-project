import React from 'react'
import JointController from "./JointController";

function JointsGrid(){

    const step = 10.0

    const jointControllerValues = [
        { name: "J1", joint_1_plus:step, joint_1_minus:-step, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:0.0, joint_6_minus:0.0 },
        { name: "J2", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:step, joint_2_minus:-step, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:0.0, joint_6_minus:0.0 },
        { name: "J3", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:step, joint_3_minus:-step, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:0.0, joint_6_minus:0.0 },
        { name: "J4", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:step, joint_4_minus:-step, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:0.0, joint_6_minus:0.0 },
        { name: "J5", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:step, joint_5_minus:-step, joint_6_plus:0.0, joint_6_minus:0.0 },
        { name: "J6", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:step, joint_6_minus:-step},
    ]

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="md:grid md:grid-cols-3 md:gap-12">
                   {jointControllerValues.map((jointValues, index) => (
                        <JointController key={index} name={jointValues.name} {...jointValues} joint_abs="false" />
                    ))}
                </div>
            </div>
        </>
    )
}

export default JointsGrid

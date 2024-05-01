import React from 'react'
import BtnUpDownJoint from "../components/BtnUpDownJoint"

function JointController(props){
    return (
        <>
            <div className="flex justify-center items-center md:h-screen max-md:my-6">
                <div className="grid grid-cols-3 ">
                    <BtnUpDownJoint buttonText="-"
                                    joint_1={props.joint_1_minus}
                                    joint_2={props.joint_2_minus}
                                    joint_3={props.joint_3_minus}
                                    joint_4={props.joint_4_minus}
                                    joint_5={props.joint_5_minus}
                                    joint_6={props.joint_6_minus}
                                    joint_abs="false"/>
                    <div className="text-center place-self-center">
                        {props.name}
                    </div>
                    <BtnUpDownJoint buttonText="+"
                                    joint_1={props.joint_1_plus}
                                    joint_2={props.joint_2_plus}
                                    joint_3={props.joint_3_plus}
                                    joint_4={props.joint_4_plus}
                                    joint_5={props.joint_5_plus}
                                    joint_6={props.joint_6_plus}
                                    joint_abs="false"/>
                </div>
            </div>
        </>
    )
}

export default JointController

import React from 'react'
import BtnUpDownJoint from "../components/JointController"
import JointController from "../components/JointController";

function Root(){
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="grid grid-cols-6 gap-12">
                    <JointController name="J1" joint_1_plus={2.0} joint_1_minus={-2.0} joint_2_plus={0.0} joint_2_minus={0.0} joint_3_plus={0.0} joint_3_minus={0.0} joint_4_plus={0.0} joint_4_minus={0.0} joint_5_plus={0.0} joint_5_minus={0.0} joint_6_plus={0.0} joint_6_minus={0.0} joint_abs="false" />
                    <JointController name="J2" joint_1_plus={0.0} joint_1_minus={0.0} joint_2_plus={2.0} joint_2_minus={-2.0} joint_3_plus={0.0} joint_3_minus={0.0} joint_4_plus={0.0} joint_4_minus={0.0} joint_5_plus={0.0} joint_5_minus={0.0} joint_6_plus={0.0} joint_6_minus={0.0} joint_abs="false" />
                    <JointController name="J3" joint_1_plus={0.0} joint_1_minus={0.0} joint_2_plus={0.0} joint_2_minus={0.0} joint_3_plus={2.0} joint_3_minus={-2.0} joint_4_plus={0.0} joint_4_minus={0.0} joint_5_plus={0.0} joint_5_minus={0.0} joint_6_plus={0.0} joint_6_minus={0.0} joint_abs="false" />
                    <JointController name="J4" joint_1_plus={0.0} joint_1_minus={0.0} joint_2_plus={0.0} joint_2_minus={0.0} joint_3_plus={0.0} joint_3_minus={0.0} joint_4_plus={2.0} joint_4_minus={-2.0} joint_5_plus={0.0} joint_5_minus={0.0} joint_6_plus={0.0} joint_6_minus={0.0} joint_abs="false" />
                    <JointController name="J5" joint_1_plus={0.0} joint_1_minus={0.0} joint_2_plus={0.0} joint_2_minus={0.0} joint_3_plus={0.0} joint_3_minus={0.0} joint_4_plus={0.0} joint_4_minus={0.0} joint_5_plus={2.0} joint_5_minus={-2.0} joint_6_plus={0.0} joint_6_minus={0.0} joint_abs="false" />
                    <JointController name="J6" joint_1_plus={0.0} joint_1_minus={0.0} joint_2_plus={0.0} joint_2_minus={0.0} joint_3_plus={0.0} joint_3_minus={0.0} joint_4_plus={0.0} joint_4_minus={0.0} joint_5_plus={0.0} joint_5_minus={0.0} joint_6_plus={2.0} joint_6_minus={-2.0} joint_abs="false" />
                </div>
            </div>
        </>
    )
}

export default Root

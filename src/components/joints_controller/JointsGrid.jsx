import React, {useContext, useEffect, useState} from 'react'
import JointController from "./JointController";
import MyContext from '../StepJoint';
import LoadingIcon from "../LoadingIcon";

function JointsGrid(){

    const [positionJoints, setPositionJoints] = useState([])
    const [isFetchingData, setIsFetchingData] = useState(false)

    const {stepJoint, stepHand} = useContext(MyContext)
    const step = parseFloat(stepJoint)
    const step_hand = parseFloat(stepHand)

    const jointControllerValues = [
        { name: "J1", joint_1_plus:step, joint_1_minus:-step, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:0.0, joint_6_minus:0.0, hand_plus:0.0, hand_minus:0.0},
        { name: "J2", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:step, joint_2_minus:-step, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:0.0, joint_6_minus:0.0, hand_plus:0.0, hand_minus:0.0 },
        { name: "J3", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:step, joint_3_minus:-step, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:0.0, joint_6_minus:0.0, hand_plus:0.0, hand_minus:0.0 },
        { name: "J4", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:step, joint_4_minus:-step, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:0.0, joint_6_minus:0.0, hand_plus:0.0, hand_minus:0.0 },
        { name: "J5", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:step, joint_5_minus:-step, joint_6_plus:0.0, joint_6_minus:0.0, hand_plus:0.0, hand_minus:0.0 },
        { name: "J6", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:step, joint_6_minus:-step, hand_plus:0.0, hand_minus:0.0},
         { name: "Hand", joint_1_plus:0.0, joint_1_minus:0.0, joint_2_plus:0.0, joint_2_minus:0.0, joint_3_plus:0.0, joint_3_minus:0.0, joint_4_plus:0.0, joint_4_minus:0.0, joint_5_plus:0.0, joint_5_minus:0.0, joint_6_plus:0.0, joint_6_minus:0.0, hand_plus:step_hand, hand_minus:-step_hand},
    ]


    const url = new URL('http://localhost:5000/api/actual-joints-pos');

    useEffect(() => {  //position of joints on first mount component

        fetch(url).then(
            res => res.json()
        ).then(
            data => {
                setPositionJoints(data.position)
                console.log(positionJoints)
            }
        ).catch()

    }, []); //dependency -> only on first mount

    return (
        <>
                <div className="grid grid-cols-1 gap-12">
                   {jointControllerValues.map((jointValues, index) => (
                        <JointController key={index} name={jointValues.name} {...jointValues}
                                         joint_abs="false"
                                         positionJoints={positionJoints}
                                         setPositionJoints={setPositionJoints}
                                         stepJoint={step}
                                         stepHand={step_hand}
                                         isFetchingData={isFetchingData}
                                         setIsFetchingData={setIsFetchingData} />
                    ))}
                </div>
            {isFetchingData  && (
                <div className="mt-6">
                   <LoadingIcon />
                </div>
            )}
        </>
    )
}

export default JointsGrid

import React, {useEffect, useState} from 'react'
import { Button } from "@mui/material";


const joints_bound = [
        { name: "J1", min:-150.0, max:150.0 },
        { name: "J2", min:-60.0, max:100.0 },
        { name: "J3", min:18.0, max:140.0 },
        { name: "J4", min:-170.0, max:170.0 },
        { name: "J5", min:-95.0, max:135.0 },
        { name: "J6", min:-170.0, max:170.0 },
        { name: "Hand", min:0.0, max:30.0 }
    ]


function BtnUpDownJoint(props) {

    const [btnDisabled, setBtnDisabled] = useState(false)

    const requestData = {
        'joint_1' : props.joint_1,
        'joint_2' : props.joint_2,
        'joint_3' : props.joint_3,
        'joint_4' : props.joint_4,
        'joint_5' : props.joint_5,
        'joint_6' : props.joint_6,
        'hand' : props.hand,
        'joint_abs' : props.joint_abs,
    }

    //construzione url con parametri
    const url = new URL('http://localhost:5000/api/move-joints');
    Object.keys(requestData).forEach(key => url.searchParams.append(key, requestData[key]));


    const handleClick = () => {
        props.setIsFetchingData(true)
        fetch(url).then(
            res => res.json()
        ).then(
            data => {
                props.setPositionJoints(data.position)
                console.log(props.positionJoints)
                props.setIsFetchingData(false)
            }
        ).catch()
    }

    useEffect(() => {
        determineButtonDisabled()
        console.log(btnDisabled)
    }, [props.positionJoints, props.stepJoint, props.stepHand]);

    const determineButtonDisabled = () => {
        let isDisabled = false
        joints_bound.forEach((joint, index) => {
          if (props.name == joint.name){
              const delta = props.name == 'Hand' ? props.stepHand : props.stepJoint
            if (props.buttonText == '-'){
                if(props.positionJoints[index] - delta < joints_bound[index].min)
                    isDisabled = true
            }else if (props.buttonText == '+'){
                if (props.positionJoints[index] + delta > joints_bound[index].max)
                    isDisabled = true
            }
          }
        })
        setBtnDisabled(isDisabled)
    }


    if (props.isFetchingData){
        return (
            <> <Button variant="contained" disabled>
                    <div className="text-xl"> {props.buttonText} </div>
                </Button>
            </>
        )
    }

    else return (
            <>
                <Button variant="contained" onClick={handleClick}  disabled={btnDisabled} >
                    <div className=" text-xl">{props.buttonText}</div>
                </Button>
            </>
    )
}

export default BtnUpDownJoint
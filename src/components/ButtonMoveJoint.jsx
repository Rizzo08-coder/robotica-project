import React, {useEffect, useState} from 'react'
import { Button } from "flowbite-react";


function ButtonMoveJoint(props) {

    const [data, setData] = useState([{}])

    const requestData = {
        'joint_1' : props.joint_1,
        'joint_2' : props.joint_2,
        'joint_3' : props.joint_3,
        'joint_4' : props.joint_4,
        'joint_5' : props.joint_5,
        'joint_6' : props.joint_6,
        'joint_abs' : props.joint_abs
    }

    //construzione url con parametri
    const url = new URL('http://localhost:5000/api/move-joint');
    Object.keys(requestData).forEach(key => url.searchParams.append(key, requestData[key]));

    console.log(url)

    useEffect(() => {
        fetch(url).then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [data])

    return (
            <>
                <Button>
                    {props.buttonText}
                </Button>
            </>
    )
}

export default ButtonMoveJoint
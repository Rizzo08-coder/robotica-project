import React, {useState} from 'react'
import { io } from "socket.io-client";

const socket = io("ws://localhost:5000", {
  reconnectionDelayMax: 10000
});

function JointPosition() {

    const [position, setPosition] = useState([])


    socket.on("robot_position", (...args) => {
        setPosition(args)
    })

    return (
        <>
            {position}
        </>
    )
}

export default JointPosition
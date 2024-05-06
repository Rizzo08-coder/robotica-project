import React, {useEffect, useState} from 'react'
import { io } from "socket.io-client";
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const socket = io("ws://localhost:5000", {
  reconnectionDelayMax: 10000
});

const joints_bound = [
        { name: "J1", min:-140.0, max:140.0 },
        { name: "J2", min:-50.0, max:90.0 },
        { name: "J3", min:25.0, max:130.0 },
        { name: "J4", min:-170.0, max:165.0 },
        { name: "J5", min:-86.0, max:125.0 },
        { name: "J6", min:-160.0, max:160.0 },
    ]


function JointPosition() {

    const [positions, setPositions] = useState([])
    useEffect(() => {
        socket.on("robot_position", function (positions) {
            const merged_array = joints_bound.map((joint, index) => ({ //FIXME:trovare modo migliore
                ...joint,
                 position: positions[index],
             }));

            setPositions([...merged_array]);

        })

        return () => {
            socket.off("robot_position");
        };

    },[])

    console.log(positions)


    return (
        <>
            <div>
                {positions.map((element, index) => (
                        <Box sx={{ width: 200 }}>
                          <Typography id="continuous-slider">
                             Joint{index+1}
                          </Typography>
                          <Slider aria-label="Joint Position" value={element.position} min={element.min} max={element.max} valueLabelDisplay="auto"/>
                    </Box>
                ))}
            </div>
        </>
    )
}

export default JointPosition
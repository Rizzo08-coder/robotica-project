import React, {useEffect, useState} from 'react'
import { io } from "socket.io-client";
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LoadingIcon from "./LoadingIcon";

const socket = io("ws://localhost:5001", {
  reconnectionDelayMax: 10000
});

const joints_bound = [
        { name: "Joint-1", min:-150.0, max:150.0 },
        { name: "Joint-2", min:-60.0, max:100.0 },
        { name: "Joint-3", min:18.0, max:140.0 },
        { name: "Joint-4", min:-170.0, max:170.0 },
        { name: "Joint-5", min:-95.0, max:135.0 },
        { name: "Joint-6", min:-170.0, max:170.0 },
        { name: "Hand", min:0.0, max:30.0 }
    ]


function JointPosition() {

    const [loaded, setLoaded] = useState(false)

    const [positions, setPositions] = useState([])

    useEffect(() => {
        socket.on("robot_position", function (positions) {
            const merged_array = joints_bound.map((joint, index) => ({ //FIXME:trovare modo migliore
                ...joint,
                 position: positions[index],
             }));

            setPositions([...merged_array]);
            setLoaded(true)

        })

        return () => {
            socket.off("robot_position");
        };

    },[])

    console.log(positions)

    if (!loaded){
        return <LoadingIcon />
    }
    else return (
        <>
            <div>
                {positions.map((element, index) => (
                    <div className="mb-2">
                    <Box key={index}  sx={{ width: 260, height:50 }} >
                          <Typography id="continuous-slider">
                              {element.name}
                          </Typography>
                        <div className="flex flex-row">
                            <div className="w-20 font-bold">
                                {element.position.toFixed(2)}
                            </div>
                            <div className="w-60">
                          <Slider aria-label="Joint Position" value={element.position.toFixed(2)} min={element.min} max={element.max} valueLabelDisplay="auto"/>
                            </div>
                        </div>
                   </Box>
                    </div>
                ))}
            </div>


        </>
    )
}

export default JointPosition
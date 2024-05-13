import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Avatar} from "flowbite-react";
import {Button} from "@mui/material";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SendIcon from "@mui/icons-material/Send";



function PlayTrajectoryBtn(){
     const {id} = useParams()
     const parseId = parseInt(id)

    const [isSended, setIsSended] = useState(false)

     const url = new URL('http://localhost:5000/api/trajectory/'+parseId+'/play');

    const handleClick = () => {
        fetch(url).then(
            res => res.json()
        ).then(
            data => {
                setIsSended(true)
                setTimeout(() => {
                    setIsSended(false)
                }, 5000)
            }
        ).catch(
        )}

    if (isSended){
        return (
            <>
                <Snackbar  open={isSended}>
                <Alert severity="success" elevation={6}>Trajectory sent correctly</Alert>
                </Snackbar>
                <div className="{flex justify-center place-self-center items-center">
                    <Button onClick={handleClick} endIcon={<PlayArrowIcon />} disabled variant="contained" color="secondary" >
                        Play
                    </Button>
                </div>
            </>
        )
    }

    else return (
        <>
            <div className="{flex justify-center place-self-center items-center">
            <Button onClick={handleClick} endIcon={<PlayArrowIcon />} color="warning" variant="contained" >
                Play
            </Button>
            </div>
        </>
    )
}

export default PlayTrajectoryBtn
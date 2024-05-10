import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Avatar, Button} from "flowbite-react";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';



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
                    <Button pill onClick={handleClick} color="gray" disabled>
                        <Avatar img="/play-icon.png" alt="back-link" size="xs" className=""/>
                    </Button>
                </div>
            </>
        )
    }

    else return (
        <>
            <div className="{flex justify-center place-self-center items-center">
            <Button pill onClick={handleClick}  color="gray" >
                   <Avatar img="/play-icon.png" alt="back-link" size="xs" className="" />
               </Button>
            </div>
        </>
    )
}

export default PlayTrajectoryBtn
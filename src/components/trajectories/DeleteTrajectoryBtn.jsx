import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';



function DeleteTrajectoryBtn({id, setDeletedTrajectory, disableDelete}){

    const url = new URL('http://localhost:5000/api/trajectories/'+id);

    const handleClick = (event) => {
       fetch(url, {method : 'DELETE'}).then(
            res => res.json()
        ).then(
            data => {
               setDeletedTrajectory(data.message)
            }
        ).catch(

       )}


    return (
        <>
            <div className="flex justify-center text-xs">
                   <Button onClick={handleClick} startIcon={<DeleteIcon />} variant="contained" color="error" className="my-4" disabled={disableDelete}>
                       Delete
                   </Button>
            </div>
        </>
    )
}

export default DeleteTrajectoryBtn
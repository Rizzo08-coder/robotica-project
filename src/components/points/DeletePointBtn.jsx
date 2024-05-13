import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';



function DeletePointBtn({id, setDeletedPoint, disableDelete}){
    const url = new URL('http://localhost:5000/api/points/'+id);

    const handleClick = () => {
        fetch(url, {method : 'DELETE'}).then(
            res => res.json()
        ).then(
            data => {
                setDeletedPoint(data.message)
            }
        ).catch(
        )}



    return (
        <>
            <div className="flex justify-center my-4 text-xs">
               <Button onClick={handleClick}  startIcon={<DeleteIcon />} variant="contained" color="error"  disabled={disableDelete}>
                   Delete
               </Button>
            </div>
        </>
    )
}

export default DeletePointBtn
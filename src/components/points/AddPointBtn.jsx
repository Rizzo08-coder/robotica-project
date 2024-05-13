import React from "react";
import {useParams} from "react-router-dom";
import { Button } from "@mui/material";
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import DeleteIcon from "@mui/icons-material/Delete";



function AddPointBtn({setNewPoint, disableAdd}){
     const {id} = useParams()
     const parseId = parseInt(id)

     const url = new URL('http://localhost:5000/api/trajectory/'+parseId+'/save-point');

    const handleClick = () => {
        fetch(url).then(
            res => res.json()
        ).then(
            data => {
                setNewPoint(data.message)
            }
        ).catch(
        )}



    return (
        <>
            <div className="flex justify-center my-4">
               <Button onClick={handleClick} variant="contained" color="success" startIcon={<CenterFocusStrongIcon />} disabled={disableAdd}>
                   Acquire Position
               </Button>
            </div>
        </>
    )
}

export default AddPointBtn
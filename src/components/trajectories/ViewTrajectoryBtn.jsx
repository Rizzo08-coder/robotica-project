import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";



function ViewTrajectoryBtn({id}){
    const link = "/trajectory/"+ id


    return (
        <>
            <div className="flex justify-center">
               <Link to={link}>
                   <Button variant="contained" className="my-4">
                       View
                   </Button>
               </Link>
            </div>
        </>
    )
}

export default ViewTrajectoryBtn
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";



function ViewTrajectoryBtn({id}){
    const link = "/trajectory/"+ id


    return (
        <>
            <div className="flex justify-center">
               <Button color="light" className="my-4">
                   <Link to={link}>View</Link>
               </Button>
            </div>
        </>
    )
}

export default ViewTrajectoryBtn
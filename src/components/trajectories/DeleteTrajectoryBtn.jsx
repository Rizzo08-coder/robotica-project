import React from "react";
import { Button } from "flowbite-react";



function DeleteTrajectoryBtn({id, setDeletedTrajectory}){

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
            <div className="flex justify-center">
                   <Button onClick={handleClick} color="red" className="my-4">
                       Delete
                   </Button>
            </div>
        </>
    )
}

export default DeleteTrajectoryBtn
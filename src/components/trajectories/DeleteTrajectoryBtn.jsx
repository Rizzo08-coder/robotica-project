import React from "react";
import { Button } from "flowbite-react";



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
                   <Button onClick={handleClick} color="failure" size="xs" className="my-4" disabled={disableDelete}>
                       Delete
                   </Button>
            </div>
        </>
    )
}

export default DeleteTrajectoryBtn
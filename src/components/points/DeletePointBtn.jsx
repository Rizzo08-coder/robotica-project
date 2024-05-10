import React from "react";
import { Button } from "flowbite-react";



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
            <div className="flex justify-center">
               <Button onClick={handleClick}  color="failure" className="my-4 text-xs" size="sm" disabled={disableDelete}>
                   Delete
               </Button>
            </div>
        </>
    )
}

export default DeletePointBtn
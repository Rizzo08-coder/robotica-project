import React, {useState} from "react";
import {useParams} from "react-router-dom";
import { Button } from "flowbite-react";



function AddPointBtn({newPoint, setNewPoint}){
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
        ).catch()}



    return (
        <>
            <div className="flex justify-center">
               <Button onClick={handleClick}  color="light" className="my-4">
                   Acquisisci posizione Robot
               </Button>
            </div>
        </>
    )
}

export default AddPointBtn
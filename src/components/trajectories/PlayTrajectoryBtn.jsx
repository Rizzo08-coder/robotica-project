import React, {useState} from "react";
import {useParams} from "react-router-dom";
import { Button } from "flowbite-react";



function PlayTrajectoryBtn(){
     const {id} = useParams()
     const parseId = parseInt(id)

     const [play, setPlay] = useState('')

     const url = new URL('http://localhost:5000/api/trajectory/'+parseId+'/play');

    const handleClick = () => {
        fetch(url).then(
            res => res.json()
        ).then(
            data => {
                setPlay(data.message)
                console.log(data.message)
            }
        ).catch(
        )}



    return (
        <>
               <Button onClick={handleClick}  color="light" >
                   Esegui Traiettoria
               </Button>
        </>
    )
}

export default PlayTrajectoryBtn
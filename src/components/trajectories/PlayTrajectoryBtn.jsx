import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {Avatar, Button} from "flowbite-react";



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
            <div className="flex justify-center place-self-center items-center">
               <Button pill onClick={handleClick}  color="gray" >
                   <Avatar img="/play-icon.png" alt="back-link" size="xs" className="" />
               </Button>
            </div>
        </>
    )
}

export default PlayTrajectoryBtn
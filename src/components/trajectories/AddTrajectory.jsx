import React, {useState} from "react";
import { Button, TextInput } from "flowbite-react";
import { useNavigate } from 'react-router-dom';




function AddTrajectory(){

    const [trajectoryName, setTrajectoryName] = useState("");
    const navigate = useNavigate();


    const requestData = {
        'name' : trajectoryName,
    }

   const url = new URL('http://localhost:5000/api/create-trajectory');

   Object.keys(requestData).forEach(key => url.searchParams.append(key, requestData[key]));


   const handleNameTrajectoryChange = (event) => {
    setTrajectoryName(event.target.value);
   };

   const handleSubmit = (event) => {
       event.preventDefault()

       fetch(url).then(
            res => res.json()
        ).then(
            data => {
                navigate(`/trajectory/${data.id}`)
            }
        ).catch(
        )
   }



    return (
        <>
            <form className="flex flex-row w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="w-4/5 mr-4">
                    <TextInput id="trajectory-name" type="text" value={trajectoryName} placeholder="Insert new trajectory" onChange={handleNameTrajectoryChange} required/>
                </div>
                <div className="w-1/5">
                     <Button type="submit" className="w-full text-center" >Enter</Button>
                </div>
            </form>
        </>
    )
}


export default AddTrajectory
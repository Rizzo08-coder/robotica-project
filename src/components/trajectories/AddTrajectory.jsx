import React, {useState} from "react";
import {Button} from "@mui/material";
import {useNavigate} from 'react-router-dom';
import {TextInput} from "flowbite-react";
import SendIcon from '@mui/icons-material/Send';
import VisibilityIcon from "@mui/icons-material/Visibility";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function AddTrajectory(){

    const [trajectoryName, setTrajectoryName] = useState("");
    const [errorName, setErrorName] = useState(false);
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
            res => {
                if (!res.ok){
                    throw new Error('errore nella richiesta')
                }
                return res.json()
            }
        ).then(
            data => {
                    navigate(`/trajectory/${data.id}`)
            }
        ).catch(
            error => {
                console.log('name already exists')
                setErrorName(true)
            }
        )
   }



    return (
        <>
            <form className="flex flex-row w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="w-4/5 mr-4 mt-0.5">
                    {errorName ?
                        <TextInput id="trajectory-name" type="text" value={trajectoryName}
                                color="failure"
                                sizing="sm"
                                helperText={
                                 <>
                                Trajectory name already exists!
                                </>
                        } onChange={handleNameTrajectoryChange}
                              placeholder="Insert new trajectory" required/>
                        :
                    <TextInput id="trajectory-name" type="text" value={trajectoryName} className=""
                               placeholder="Insert new trajectory"  sizing="sm" onChange={handleNameTrajectoryChange}
                               required />


                    }
                </div>
                <div className="w-1/5">
                    <Button type="submit" variant="contained" size="medium" endIcon={<SendIcon />} className="w-full text-center">Enter</Button>
                </div>
            </form>
        </>
    )
}


export default AddTrajectory
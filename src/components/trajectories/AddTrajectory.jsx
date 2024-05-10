import React, {useState} from "react";
import {Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';


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
                <div className="w-4/5 mr-4">
                    {errorName ?
                         <TextField fullWidth required error
                                  size="small"
                                  id="trajectory-name-error"
                                  label="Error"
                                  helperText="Trajectory name already exists!"
                                  onChange={handleNameTrajectoryChange}
                                    value={trajectoryName}/>
                        :

                         <TextField fullWidth required
                                    id="trajectory-name"
                                    label="Trajectory name"
                                    size="small"
                                    value={trajectoryName}
                                    onChange={handleNameTrajectoryChange}
                                    />


                    }
                </div>
                <div className="w-1/5">
                    <Button type="submit" variant="contained" size="medium" className="w-full text-center">Enter</Button>
                </div>
            </form>
        </>
    )
}


export default AddTrajectory
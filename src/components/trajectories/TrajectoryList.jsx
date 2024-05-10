import React, {useState, useEffect} from 'react'
import { List } from "flowbite-react";
import TrajectoryElement from "./TrajectoryElement";
import LoadingIcon from "../LoadingIcon";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";


function TrajectoryList(){

    const [loaded, setLoaded] = useState(false)

    const [trajectoryList, setTrajectoryList] = useState([])
    const [deletedTrajectory, setDeletedTrajectory] = useState('')
    const [isDeleted, setIsDeleted] = useState(false)

    const url = new URL('http://localhost:5000/api/trajectories');

    useEffect(() => {
        const fetchData = () => {
        fetch(url).then(
            res => res.json()
        ).then(
            data => {
                setTrajectoryList(data.result)
                setLoaded(true)
            }
        ).catch()}

        fetchData()
        setDeletedTrajectory('')

        console.log('aggiornata')
    }, [deletedTrajectory]);

    useEffect(() => {
        if (deletedTrajectory != '') {
            setIsDeleted(true)

            setTimeout(() => {
                setIsDeleted(false)
            }, 4000)
        }
    }, [deletedTrajectory])

    if (!loaded){
        return (
            <div className="mt-16">
                 <LoadingIcon />
            </div>
        )
    }

    else return (
        <>
            <Snackbar  open={isDeleted}>
                <Alert severity="warning" elevation={6}>Trajectory deleted correctly!</Alert>
             </Snackbar>
          <List unstyled className="max-w-lg divide-y">
            {trajectoryList.map( (trajectory, index) => (
                     <TrajectoryElement key={index} trajectory={trajectory} deletedTrajectory={deletedTrajectory} setDeletedTrajectory={setDeletedTrajectory} isDeletedTrajectory={isDeleted}/>
            ))}
          </List>
        </>
    )
}

export default TrajectoryList

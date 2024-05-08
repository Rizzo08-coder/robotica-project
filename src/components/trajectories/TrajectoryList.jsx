import React, {useState, useEffect} from 'react'
import { List } from "flowbite-react";
import TrajectoryElement from "./TrajectoryElement";


function TrajectoryList(){

    const [trajectoryList, setTrajectoryList] = useState([])
    const [deletedTrajectory, setDeletedTrajectory] = useState('')

    const url = new URL('http://localhost:5000/api/trajectories');

    useEffect(() => {
        const fetchData = () => {
        fetch(url).then(
            res => res.json()
        ).then(
            data => {
                setTrajectoryList(data.result)
            }
        ).catch()}

        fetchData()
        setDeletedTrajectory('')
        console.log('aggiornata')
    }, [deletedTrajectory]);


    return (
        <>
          <List unstyled className="max-w-lg divide-y">
            {trajectoryList.map( (trajectory, index) => (
                     <TrajectoryElement key={index} trajectory={trajectory} deletedTrajectory={deletedTrajectory} setDeletedTrajectory={setDeletedTrajectory}/>
            ))}
          </List>
        </>
    )
}

export default TrajectoryList

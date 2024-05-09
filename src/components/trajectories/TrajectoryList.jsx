import React, {useState, useEffect} from 'react'
import { List } from "flowbite-react";
import TrajectoryElement from "./TrajectoryElement";
import LoadingIcon from "../LoadingIcon";


function TrajectoryList(){

    const [loaded, setLoaded] = useState(false)

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
                setLoaded(true)
            }
        ).catch()}

        fetchData()
        setDeletedTrajectory('')
        console.log('aggiornata')
    }, [deletedTrajectory]);

    if (!loaded){
        return (
            <div className="mt-16">
                 <LoadingIcon />
            </div>
        )
    }

    else return (
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

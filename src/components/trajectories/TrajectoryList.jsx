import React, {useState, useEffect} from 'react'
import { List } from "flowbite-react";
import TrajectoryElement from "./TrajectoryElement";


function TrajectoryList(){

    const [trajectoryList, setTrajectoryList] = useState([])

    const url = new URL('http://localhost:5000/api/trajectories');

    useEffect(() => {
        const fetchData = () => {
        fetch(url).then(
            res => res.json()
        ).then(
            data => {
                setTrajectoryList(data.result)
            }
        ).catch(
        )}

        fetchData()
        console.log('caricata lista traiettorie')
    }, []);


    return (
        <>
            <AddTrajectory />
          <List unstyled className="max-w-lg divide-y">
            {trajectoryList.map( (trajectory, index) => (
                     <TrajectoryElement key={index} trajectory={trajectory}/>
            ))}
          </List>
        </>
    )
}

export default TrajectoryList

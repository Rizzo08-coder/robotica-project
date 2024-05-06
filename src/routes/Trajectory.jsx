import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import PointList from "../components/points/PointList"
import { List } from "flowbite-react";


function Trajectory(){
    const {id} = useParams()
    const parseId = parseInt(id)

    const [trajectory, setTrajectory] = useState({})

    const url = new URL('http://localhost:5000/api/trajectory/'+parseId);

    useEffect(() => {
        const fetchData = () => {
        fetch(url).then(
            res => res.json()
        ).then(
            data => {
                setTrajectory(data)
                console.log(data)
            }
        ).catch()}

        fetchData()
    },[]);


    return (
        <>

            <div className="text-center font-bold text-3xl">
              [{trajectory.id}] - {trajectory.name}
            </div>


            <List unstyled className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                <PointList id={trajectory.id}/>
            </List>

        </>
    )
}

export default Trajectory

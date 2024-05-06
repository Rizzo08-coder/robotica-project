import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import PointList from "../components/points/PointList"
import JointsGrid from "../components/joints_controller/JointsGrid";


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
            <div className="text-center font-bold text-3xl mt-12 mb-2">
              [{trajectory.id}] - {trajectory.name}
            </div>
            <div className="flex flex-row">
                 <div className="w-1/4 ">
                     <PointList />
                 </div>
                 <div className="w-3/4 mt-32">
                     <JointsGrid />
                 </div>
            </div>
        </>
    )
}

export default Trajectory

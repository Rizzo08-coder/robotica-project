import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import PointList from "../components/points/PointList"
import JointsGrid from "../components/joints_controller/JointsGrid";
import PlayTrajectoryBtn from "../components/trajectories/PlayTrajectoryBtn";
import JointPosition from "../components/JointPosition";


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

            <div className="fixed top-0 left-0 p-4 bg-gray-200 shadow-md h-screen rounded-md">
                <JointsGrid/>
            </div>
            <div className="fixed top-0 right-0 p-4 bg-gray-200 shadow-md rounded-md h-screen ">
                <JointPosition/>
            </div>

            <div className="flex justify-center font-bold text-3xl mt-12 mb-2">
                <div className="mr-4">
                    [{trajectory.id}] - {trajectory.name}
                </div>
                <PlayTrajectoryBtn/>
            </div>

            <div className="flex justify-center mt-6">
                <PointList/>
            </div>
        </>
    )
}

export default Trajectory

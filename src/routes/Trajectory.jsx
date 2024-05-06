import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import PointList from "../components/points/PointList"
import JointsGrid from "../components/joints_controller/JointsGrid";
import {Button} from "flowbite-react";
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

            <div className="flex justify-center font-bold text-3xl mt-12 mb-2">
                <div className="mr-4">
                    [{trajectory.id}] - {trajectory.name}
                </div>
                <PlayTrajectoryBtn />
            </div>
            <div className="flex flex-row">
                 <div className="w-1/3 ">
                     <PointList />
                 </div>
                 <div className="w-2/3 mt-32">
                     <JointsGrid />
                     <div className="mt-6 flex justify-center">
                              <JointPosition />
                     </div>
                 </div>
            </div>
        </>
    )
}

export default Trajectory

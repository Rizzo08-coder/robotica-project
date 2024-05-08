import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import PointList from "../components/points/PointList"
import PlayTrajectoryBtn from "../components/trajectories/PlayTrajectoryBtn";
import BackRootBtn from "../BackRootBtn";


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
               <BackRootBtn />
                <div className="mr-8 ml-6  font-bold italic place-self-center">
                    {trajectory.name}
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

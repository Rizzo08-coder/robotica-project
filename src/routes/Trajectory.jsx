import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import PointList from "../components/points/PointList"
import PlayTrajectoryBtn from "../components/trajectories/PlayTrajectoryBtn";
import BackRootBtn from "../BackRootBtn";
import LoadingIcon from "../components/LoadingIcon";


function Trajectory(){
    const {id} = useParams()
    const parseId = parseInt(id)

    const [loaded, setLoaded] = useState(false)
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
                setLoaded(true)
            }
        ).catch()}

        fetchData()
    },[]);


    if (!loaded){
        return (
            <div className="flex justify-center items-center h-screen">
            <LoadingIcon />
            </div>
        )
    }
    else return (
        <>
            <div className="flex justify-center font-bold text-4xl mt-12 mb-2">
               <BackRootBtn />
                <div className="mr-8 ml-6  font-bold  place-self-center">
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

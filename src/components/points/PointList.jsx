import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import Point from "./Point";
import { List } from "flowbite-react";
import AddPointBtn from "./AddPointBtn";

function PointList(){

    const {id} = useParams()
    const parseId = parseInt(id)

    const [pointList, setPointList] = useState([])
    const [newPoint, setNewPoint] = useState('')

    console.log(id)

    const url = new URL('http://localhost:5000/api/trajectory/'+ parseId + '/points');

    useEffect(() => {
        const fetchData = () => {
        fetch(url).then(
            res => res.json()
        ).then(
            data => {
                setPointList(data.result)
            }
        ).catch()}

        fetchData()
        setNewPoint('')
    }, [newPoint]);


    return (
        <>
          <AddPointBtn newPoint={newPoint} setNewPoint={setNewPoint}/>
          <List unstyled className="max-w-sm divide-y ">
            {pointList.map( (point, index) => (
                <Point key={index} point={point} />
            ))}
          </List>
        </>
    )
}

export default PointList

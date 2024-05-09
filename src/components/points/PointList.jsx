import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import Point from "./Point";
import { List } from "flowbite-react";
import AddPointBtn from "./AddPointBtn";
import { Button } from "flowbite-react";
import LoadingIcon from "../LoadingIcon";


function PointList(){

    const {id} = useParams()
    const parseId = parseInt(id)

    const [loaded, setLoaded] = useState(false)

    const [pointList, setPointList] = useState([])
    const [newPoint, setNewPoint] = useState('')
    const [deletedPoint, setDeletedPoint] = useState('')

    const url = new URL('http://localhost:5000/api/trajectory/'+ parseId + '/points');

    useEffect(() => {
        const fetchData = () => {
        fetch(url).then(
            res => res.json()
        ).then(
            data => {
                setPointList(data.result)
                setLoaded(true)
            }
        ).catch(
        )}

        fetchData()
        setNewPoint('')
        setDeletedPoint('')
        console.log('aggiornata')
    }, [newPoint, deletedPoint]);


    if (!loaded){
        return (
            <div className="mt-16">
                <LoadingIcon />
            </div>
        )
    }
    else return (
        <>
          <div className="flex flex-col">
              <AddPointBtn newPoint={newPoint} setNewPoint={setNewPoint}/>
              <List unstyled className="max-w-lg divide-y">
                    {pointList.map( (point, index) => (
                        <Point key={index} point={point} deletedPoint={deletedPoint} setDeletedPoint={setDeletedPoint}/>
                     ))}
              </List>
          </div>
        </>
    )
}

export default PointList

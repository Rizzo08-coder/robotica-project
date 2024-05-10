import React, {useState, useEffect, useRef} from 'react'
import {useParams} from "react-router-dom";
import Point from "./Point";
import { List } from "flowbite-react";
import AddPointBtn from "./AddPointBtn";
import { Button } from "flowbite-react";
import LoadingIcon from "../LoadingIcon";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";


function PointList(){

    const {id} = useParams()
    const parseId = parseInt(id)

    const [loaded, setLoaded] = useState(false)

    const [pointList, setPointList] = useState([])
    const [newPoint, setNewPoint] = useState('')
    const [deletedPoint, setDeletedPoint] = useState('')
    const [isDeleted, setIsDeleted] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    const [isInitialMount, setIsInitialMount] = useState(true);

    const url = new URL('http://localhost:5000/api/trajectory/'+ parseId + '/points');

    useEffect(() => {

        const fetchData = () => {
        fetch(url).then(
            res => res.json()
        ).then(
            data => {
                setPointList(data.result)
                setLoaded(true)
                if (!isInitialMount) {
                   setIsAdd(true);
                }
            }
        ).catch(
        )}

        fetchData()
        setNewPoint('')
        console.log('aggiornata')
    }, [newPoint]);

     useEffect(() => {
         const fetchData = () => {
         fetch(url).then(
            res => res.json()
        ).then(
            data => {
                setPointList(data.result)
                setLoaded(true)
                if (!isInitialMount) {
                   setIsDeleted(true);
                }
            }
        ).catch(
        )}

        fetchData()
        setDeletedPoint('')
        console.log('aggiornata')
        setIsInitialMount(false)
    }, [deletedPoint]);


     useEffect(() => {
         setTimeout(() => {
                    setIsDeleted(false)
                }, 2000)
     }, [isDeleted])

    useEffect(() => {
         setTimeout(() => {
                    setIsAdd(false)
                }, 2000)
     }, [isAdd])



    if (!loaded){
        return (
            <div className="mt-16">
                <LoadingIcon />
            </div>
        )
    }
    else return (
        <>
            <Snackbar  open={isDeleted}>
                <Alert severity="warning" elevation={6}>Point deleted correctly!</Alert>
             </Snackbar>
            <Snackbar  open={isAdd}>
                <Alert severity="success" elevation={6}>Point added correctly!</Alert>
             </Snackbar>
          <div className="flex flex-col">
              <AddPointBtn newPoint={newPoint} setNewPoint={setNewPoint} disableAdd={isAdd}/>
              <List unstyled className="max-w-lg divide-y">
                    {pointList.map( (point, index) => (
                        <Point key={index} point={point} deletedPoint={deletedPoint} setDeletedPoint={setDeletedPoint} isDeletedPoint={isDeleted}/>
                     ))}
              </List>
          </div>
        </>
    )
}

export default PointList

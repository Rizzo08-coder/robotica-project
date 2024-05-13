import React from "react";
import {List, Avatar, Button} from "flowbite-react";
import DeletePointBtn from "./DeletePointBtn";


function Point({point, setDeletedPoint, isDeletedPoint}){
    return (
        <>
            <List.Item className="p-3 sm:p-4 bg-gray-200 rounded-md">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Avatar img="/point.png" alt="point_img" rounded size="sm" className="mx-4" />
                    <div className="min-w-0 flex">
                        <div className="grid grid-cols-3">
                            <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J1 = {point.j1.toFixed(2)}</div>
                            <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J2 = {point.j2.toFixed(2)}</div>
                            <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J3 = {point.j3.toFixed(2)}</div>
                            <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J4 = {point.j4.toFixed(2)}</div>
                            <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J5 = {point.j5.toFixed(2)}</div>
                            <div className="truncate text-sm font-medium text-gray-900 dark:text-white">J6 = {point.j6.toFixed(2)}</div>
                            <div className="truncate text-sm font-medium text-gray-900 dark:text-white">Hand = {point.hand.toFixed(2)}</div>
                        </div>
                    </div>
                    <DeletePointBtn setDeletedPoint={setDeletedPoint} id={point.id} disableDelete={isDeletedPoint}/>
                </div>
            </List.Item>

        </>
    )
}

export default Point
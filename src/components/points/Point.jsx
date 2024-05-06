import React from "react";
import { List, Avatar } from "flowbite-react";


function Point(props){
    return (
        <>
            <List.Item className="pb-3 sm:pb-4 ">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Avatar img="/point.png" alt="point_img" rounded size="sm" className="m-4" />
                    <div className="min-w-0 flex">
                        <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J1 = {props.point.j1}</div>
                        <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J2 = {props.point.j2}</div>
                        <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J3 = {props.point.j3}</div>
                        <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J4 = {props.point.j4}</div>
                        <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J5 = {props.point.j5}</div>
                        <div className="truncate text-sm font-medium text-gray-900 dark:text-white">J6 = {props.point.j6}</div>
                    </div>
                </div>
            </List.Item>
        </>
    )
}

export default Point
import React from "react";
import { List, Avatar } from "flowbite-react";


function Point(props){
    return (
        <>
            <List.Item className="p-3 sm:p-4 bg-gray-200">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Avatar img="/point.png" alt="point_img" rounded size="sm" className="mx-4" />
                    <div className="min-w-0 flex">
                        <div className="grid grid-cols-3">
                            <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J1 = {props.point.j1}</div>
                            <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J2 = {props.point.j2}</div>
                            <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J3 = {props.point.j3}</div>
                            <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J4 = {props.point.j4}</div>
                            <div className="truncate text-sm font-medium text-gray-900 dark:text-white mr-4">J5 = {props.point.j5}</div>
                            <div className="truncate text-sm font-medium text-gray-900 dark:text-white">J6 = {props.point.j6}</div>
                        </div>
                    </div>
                </div>
            </List.Item>
        </>
    )
}

export default Point
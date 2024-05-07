import React from "react";
import {List, Avatar} from "flowbite-react";
import ViewTrajectoryBtn from "./ViewTrajectoryBtn";

function TrajectoryElement({trajectory}){
    return (
        <>
            <List.Item className="p-3 sm:p-4 bg-gray-200">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Avatar img="/trajectory.png" alt="trajectory_img" size="sm" className="w-1/6 mx-4" />
                        <div className="w-5/6 grid grid-cols-2 flex items-center">
                            <div className=" text-sm font-medium text-gray-900 ">id = {trajectory.id}</div>
                            <div className=" text-sm font-medium text-gray-900 mr-4">name = {trajectory.name}</div>
                        </div>
                    <ViewTrajectoryBtn id={trajectory.id}/>
                </div>
            </List.Item>

        </>
    )
}

export default TrajectoryElement
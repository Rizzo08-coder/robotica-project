import React from "react";
import { Link } from "react-router-dom";
import {Avatar, Button} from "flowbite-react";



function BackRootBtn(){

    return (
        <>
             <div className="flex justify-center place-self-center items-center">
            <Link to="/">
                <Avatar img="/arrow-back.png" alt="back-link" size="md" className="mt-2" />
            </Link>
             </div>
        </>
    )
}

export default BackRootBtn
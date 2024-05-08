import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";



function BackRootBtn(){

    return (
        <>
            <div className="flex justify-center mr-4">
               <Link to="/">
                   <Button color="light" className="my-4">
                       Back
                   </Button>
               </Link>
            </div>
        </>
    )
}

export default BackRootBtn
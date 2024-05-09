import React from "react";
import {Spinner} from "flowbite-react";


function LoadingIcon(){
    return (
        <>
            <div className="flex justify-center items-center">
                 <Spinner color="failure" aria-label="loading ..." size="lg" />
            </div>
        </>
    )
}

export default LoadingIcon
import React from "react";
import { ImSpinner9 } from "react-icons/im";

function LoadingComp(){
    return(
        <div className="h-full text-7xl flex items-center justify-center">
            <ImSpinner9 className="animate-spin"/></div>
    )
}

export default LoadingComp
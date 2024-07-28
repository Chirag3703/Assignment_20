import React from "react";

function PageNo(props){

    function New(){
        button.style.bgcolor="orange"
        button.style.color="white"
    }

    return(
        <button class="border-2 border-orange-600 text-orange-600 py-1 px-2 text-xs font-bold"
        onClick={New}>
            {props.number}
        </button>
    )
}

export default PageNo
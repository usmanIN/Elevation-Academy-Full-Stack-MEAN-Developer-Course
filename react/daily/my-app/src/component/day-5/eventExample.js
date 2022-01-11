import React from "react";

export  function EventExample(){
    
    function eventClick(){
        console.log('Click Event Handler');
    }

    return(
        <button onClick={eventClick}>Click Here</button>
    )
}
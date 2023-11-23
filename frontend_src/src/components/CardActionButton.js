import React from "react";


const CardActionButton = ({label, action, handler}) =>{
    return(
        <button onClick={() => {

            action().then(handler)

        }} style={{ color: 'black' }}> {label}   </button>
    )
}
export default CardActionButton
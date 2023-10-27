import React from "react";

const InputButton = ({handleWhat, text, passwordsMatch}) => {

    return (
        <button className={"w-full bg-blue-700 h-12 rounded-lg mt-8 mb-2 text-white"} onClick={handleWhat}>
            {text}
        </button>
    );

}

export default InputButton
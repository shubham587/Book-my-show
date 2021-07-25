import React from 'react'

const Cast = (props) => {
    return (
        <>
           <div className="flex flex-col items-center">
                <div className="w-28 h-28">
                    <img src={props.image}
                     alt="cast crew"
                     className="w-full h-full rounded-full" />
                </div>
                <h1 className="text-xl  text-gray-800">{props.castName}</h1>
                <h1 className="text-xs  text-gray-500">as {props.role}</h1>
            </div> 
        </>
    )
}

export default Cast

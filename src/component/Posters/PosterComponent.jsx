import React from 'react'

function Poster(props) {
    return (
        <>
        <div className="flex flex-col items-start gap-2 px-3">
         <div className="h-80">
            <img src={props.src} alt={props.alt}
            className="w-full h-full rounded-xl" />
         </div>
         <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-grey-700" }`}>
            {props.title}
         </h3>
         <p className={`text-lg font-bold ${props.isDark ? "text-white" : "text-grey-700" }`}>
            {props.subtitle}
         </p>
        </div>
        </>
    )
}

export default Poster

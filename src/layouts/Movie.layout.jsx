import React from 'react'

// component
import Navbar from "../component/navbar/Navbar";
const Movielayout = (props) => {
    return (
        <>
            <Navbar/>
            {props.children}
        </>
    )
}

export default Movielayout

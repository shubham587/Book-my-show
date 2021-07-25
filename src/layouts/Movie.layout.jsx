import React from 'react'


// component
import MovieNavbar from '../component/navbar/MovieNavbar';

const Movielayout = (props) => {
    return (
        <>
            <MovieNavbar/>
            {props.children}
        </>
    )
}

export default Movielayout

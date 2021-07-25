import React from "react";

// component
import Navbar from "../component/navbar/Navbar";
import Herocarousel from "../component/Herocarousel.component/Herocarousel";

const DefaultLayout = (props) => {
    return(
        <>
            <Navbar/>
            <Herocarousel/>
            
            {props.children}
        </>
    );
}

export default DefaultLayout;
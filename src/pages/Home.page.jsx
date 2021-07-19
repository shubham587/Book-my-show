import React from 'react'
import Slider from 'react-slick'
import EntertainmentCardSlider from '../component/Entertainment/EntertainmentCard'


// /config
import PremiereImages from '../config/PosterImage.config'
import PosterSlider from '../component/PosterSliderComponent.jsx/PosterSliderComponent'

function Homepage() {
    return (
        <>
            <div className="container w-4/5 mx-auto px-4 py-8 my-12">
                <h1 className="text-2xl font-bold text-gray-800 my-3">
                  The best of Entertainment
                 </h1>
                 <EntertainmentCardSlider />
             </div>
            <div className="bg-bms-800 py-12 "> 
                <div className="hidden item-center justify-between md:flex container mx-auto w-4/5">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                    alt="Premiere image" 
                    className="w-full h-full"/> 
                </div>
                <div className="container mx-auto w-4/5 px-4"> 
                <PosterSlider images={PremiereImages} 
                title="Premiere" 
                subtitle="Brand new release on every friday"/>
                </div>
            </div>
            {/* online streaming events */}
            <div className="container mx-auto w-4/5 px-4 my-8">
                <PosterSlider 
                images={PremiereImages} 
                title="Online Streaming Events" 
                isDark={false}/>
            </div>
            {/* outdoor events */}
            <div className="container mx-auto w-4/5 px-4 my-8">
                <PosterSlider 
                images={PremiereImages} 
                title="Outdoor Events" 
                isDark={false}/>
            </div>
        </>
    )
}

export default Homepage

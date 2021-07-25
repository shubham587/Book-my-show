import React from 'react'
import Slider from 'react-slick'
import Poster from '../Posters/PosterComponent'

// configs
import PosterCarouselsetting from '../../config/posterCarousel.config'



const PosterSlider = (props) => {
    const SliderConfig = props.config ? props.config : PosterCarouselsetting

    return (
        <>
            <div className="flex flex-col  items-start py-2">
              <h3 className={`text-lg font-bold ${props.isDark ? "text-white" : "text-grey-700" }`}>{props.title}</h3>
              <p className={`text-xl ${props.isDark ? "text-white" : "text-grey-700" }`}>{props.subtitle}</p>
            </div>
           <Slider { ...SliderConfig }>
                {props.images.map((image) => (
                    <Poster {...image} isDark={props.isDark}/>
                ))}
            </Slider> 
        </>
    )
}

export default PosterSlider

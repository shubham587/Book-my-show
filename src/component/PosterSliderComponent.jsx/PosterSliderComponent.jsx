import React from 'react'
import Slider from 'react-slick'
import Poster from '../Posters/PosterComponent'

// configs
import PosterCarouselsetting from '../../config/posterCarousel.config'

const PosterSlider = (props) => {
    return (
        <>
            <div className="flex flex-col  items-start py-2">
              <h3 className="text-white text-xl font-bold">{props.title}</h3>
              <p className="text-white text-sm">{props.subtitle}</p>
            </div>
           <Slider {...PosterCarouselsetting}>
                {props.images.map((image) => (
                    <Poster {...image} isDark/>
                ))}
            </Slider> 
        </>
    )
}

export default PosterSlider

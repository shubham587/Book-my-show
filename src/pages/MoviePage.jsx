import React from 'react'
import {FaCcVisa, FaCcApplePay} from 'react-icons/fa'
import Slider from 'react-slick'


// /config
import PremiereImages from '../config/PosterImage.config'
import PosterSlider from '../component/PosterSliderComponent.jsx/PosterSliderComponent'

// component
import MovieHeroComponent from '../component/MovieHero/MovieHeroComponent'
import Cast from '../component/cast/CastComponent'

const Movies = () => {
    const PosterCarouselSetting = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      };
      
    
    return (
        <>
            <MovieHeroComponent/>
            <div className="container lg:w-2/3 px-4 lg:ml-20 my-8">
                        <div className="flex flex-col items-start gap-4"> 
                        <h2 className="text-gray-800 font-bold text-4xl">About the Movie</h2>
                        <p className="md:text-xl lg:text-gray-800 text-xl">Kong is on a journey to find his true home but gets in the way of an enraged Godzilla. The epic clash is only the beginning of the mystery that lies within the core of the Earth.</p>
                        </div>
                        <hr className="m-8 font-bold"/>
            <div className="my-8">
                <h2 className="text-gray-800 font-bold text-2xl mb-3">
                    Applicable offers
                </h2>
                <div className="flex flex-col gap-3 lg:flex-row">
                    <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                    <div className="w-8 h-8">
                        <FaCcVisa className="w-full h-full" />
                    </div>
                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-700 text-xl font-bold">
                        Visa Stream Offer
                        </h3>
                    <p className="text-gray-600">
                    Get 50% off up to INR 150 on all RuPay cards* on BookMyShow
                    Stream.
                    </p>
                </div>
                </div>
                <div className="flex item-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                <div className="w-8 h-8">
                    <FaCcApplePay className="w-full h-full" />
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                    <p className="text-gray-600">
                    Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy
                    Pass @Rs.99
                    </p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="m-8 font-bold"/>
            <div className="my-8">
                <h2 className="text-gray-800 font-bold text-2xl mb-4">
                        Cast and Crew
                    </h2>
                <div className="flex flex-wrap gap-6 justify-center lg:flex-row ">
                    <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/alexander-skarsgard-1057902-24-03-2017-13-51-10.jpg"
                    castName="Alexander"
                    role="Nathan Lind"/>
                    <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/alexander-skarsgard-1057902-24-03-2017-13-51-10.jpg"
                    castName="Alexander"
                    role="Nathan Lind"/>
                    <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/alexander-skarsgard-1057902-24-03-2017-13-51-10.jpg"
                    castName="Alexander"
                    role="Nathan Lind"/>
                    <Cast image="https://in.bmscdn.com/iedb/artist/images/website/poster/large/alexander-skarsgard-1057902-24-03-2017-13-51-10.jpg"
                    castName="Alexander"
                    role="Nathan Lind"/>
                </div>
            </div>
            <hr className="m-8 font-bold"/>
            <div my-8>
            <PosterSlider 
                config = {PosterCarouselSetting}
                images={PremiereImages} 
                title="You Might also Like" 
                isDark={false}/>
            <hr className="m-8 font-bold"/>
            <PosterSlider 
                config = {PosterCarouselSetting}
                images={PremiereImages} 
                title="BMS Xclusive" 
                isDark={false}/>
            </div>
        </div>
        </>
    )
}

export default Movies

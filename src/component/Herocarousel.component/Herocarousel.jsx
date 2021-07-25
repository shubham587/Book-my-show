import React from 'react'
import HeroSlider from "react-slick";

// components
import { NextArrow,PrevArrow } from "./Arrows.component"
// Import css files from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Herocarousel = () => {
    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: "300px",
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

    const settings = {
        arrows: true,
        autoplay : true,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
    const images = ["https://in.bmscdn.com/promotions/cms/creatives/1626343774760_admissionrageproductionsfestival_webshowcase_1280x500.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1626086157424_diyartcraftliveworkshopforsunfeastyippee_webshowcase_1280x500_revised.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1626343774760_admissionrageproductionsfestival_webshowcase_1280x500.jpg",
    "https://in.bmscdn.com/promotions/cms/creatives/1626529170453_mindgames_1280x500_ios.jpg"]
    return (
        <>
            <div className="lg:hidden">
                 <HeroSlider {...settings}>
                {images.map((image) => (
                  <div className="w-full h-56 md:h-80 py-3 ">
                    <img src={image} alt="testing" className="w-full h-full" />
                  </div>
                  ))}
                </HeroSlider>
            </div>

      <div className="hidden lg:block">
        <HeroSlider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={image}
                alt="testing"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </HeroSlider>
      </div>
        </>
    )
}

export default Herocarousel


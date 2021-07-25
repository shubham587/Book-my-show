import React from 'react'
import MovieInfo from './MovieInfoComponent'

const MovieHeroComponent = () => {
    return (
        <>
            {/* small screen */}
            <div className="relative md:hidden w-full" style={{height: "calc(180vw)"}}>
                <div className="absolute z-20 bottom-0">
                    <MovieInfo />
                </div>
                <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
                <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-620,ow-40:ote-ODYlICAxMDFrIHZvdGVz,ots-30,otc-FFFFFF,oy-620,ox-80/et00122511-xeszthqxah-portrait.jpg"
                alt="sm poster"
                className="w-full h-full" />
            </div>
            {/* medium screen */}
            <div className="relative hidden md:block lg:hidden" style={{height: "calc(140vw)"}}>
            <div className="absolute z-20 bottom-9">
                    <MovieInfo />
                </div>
            <div className="w-full h-56 bg-opacity-50 absolute bg-black z-10 bottom-0" />
                <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-680.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-620,ow-40:ote-ODYlICAxMDFrIHZvdGVz,ots-30,otc-FFFFFF,oy-620,ox-80/et00122511-xeszthqxah-portrait.jpg"
                alt="md poster"
                className="w-full  h-full" />
            </div>
            {/* large screen */}
            <div className="relative hidden lg:block " style={{height: "30rem"}}>
                <div
                    className="absolute z-10 w-full h-full"
                    style={{
                    backgroundImage:
                        "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
                    }}/>
                    
                <div className="flex items-center absolute left-24 top-10  z-20  ">
                    <div className="w-64 h-96 rounded-xl">
                        <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/godzilla-vs-kong-et00122511-16-06-2021-12-47-29.jpg"
                        alt="movie poster" 
                        className="w-full h-full rounded-xl"/>
                    </div>
                    <div className="m-16 z-20"> 
                        <MovieInfo />
                    </div>
                </div>
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/medium/godzilla-vs-kong-et00122511-16-06-2021-12-47-29.jpg"
                    alt="lg poster"
                    className="w-full h-full" />
                    
            </div> 
        </>
    )
}

export default MovieHeroComponent

import React from 'react'

const MovieInfo = () => {
    return (
        <>
         <div className="flex items-center gap-3 md:px-4">
          <div className="w-40 h-8">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premier"
              className="w-full h-full"
            />
          </div>
          <span className="bg-bms-700 p-1 text-xs text-white rounded-md">
            Streaming now
          </span>
        </div>   
         <div className="flex flex-col-reverse md:gap-6 lg:flex-col ">
         <div className="">
         <h1 className="text-white hidden lg:block text-5xl lg:text-6xl font-bold">Godzilla vs. Kong</h1>
         <h4 className="text-black bg-white lg:text-2xl text-center w-full mt-4 rounded-md ">2D,4DX,MX4D,IMAX 2D,IMAX 3D</h4>
         <h4 className="text-black bg-white lg:text-2xl text-center w-full mt-4 rounded-md ">English,Hindi,Telug,Tamil</h4>
         <h4 className="text-white  lg:text-2xl text-center  mt-4 w-full" >1h 53m    &bull;    Action, Fantasy, Sci-Fi, Thriller  &bull;  13+   &bull;24,Mar,2021</h4>
         </div>
         <div className="flex items-center gap-5 md:w-screen lg:w-full mt-4"> 
           <button className="bg-red-600 text-white font-semibold w-full py-3 rounded-lg">Rent ₹149</button>
           <button className="bg-red-600 text-white font-semibold w-full py-3 rounded-lg">Rent ₹149</button>
         </div>
         </div>
         <div></div>
        </>
    )
}

export default MovieInfo

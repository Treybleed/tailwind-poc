import React from "react";
import Slider from "react-slick";

const SlickSlider = () => { 

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1
    }

    return ( 
        <Slider {...settings}>
            <div className="w-full h-14 bg-gray-400">
                <h1>Hello</h1>
            </div>
            <div className="w-full h-14 bg-gray-400">
                <h1>ok</h1>
            </div>
            <div className="w-full h-14 bg-gray-400">
                <h1>test</h1>
            </div>
            <div className="w-full h-14 bg-gray-400">
                <h1>yes</h1>
            </div>
        </Slider>
    )
}

export default SlickSlider;
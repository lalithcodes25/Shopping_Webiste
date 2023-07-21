import React, {useState} from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "./ImageSlider.css";

function ImageSlider({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide =() => {
        setCurrent(current === length-1? 0 : current+1);
    }
    const prevSlide = () => {
        setCurrent(current === 0? length-1 : current-1);
    }
    return (
        <div className="slider">
            <ArrowBackIosIcon className="left_arrow" onClick={prevSlide} />
            <ArrowForwardIosIcon className="right_arrow" onClick={nextSlide}/>
           {slides.map((slide, index) => {
               return (
                   <div key={index}>
                       {index === current && (<img src={slide.images} alt="banners" className="image"/>)}  
                   </div>
               )
           })}
        </div>
    )
}

export default ImageSlider;

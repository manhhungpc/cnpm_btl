import React, {useState, useEffect } from "react"
import Styles from "../styles/Slider_cover.module.css"
import BtnSlider from "./BtnSlider"
import dataSlider from "./dataSlider"

export default function Slide() {

    const [slideIndex, setSlideIndex] = useState(1);
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    
      useEffect(() => {
        setSlideIndex(1);
      }, []);
    
      useEffect(() => {
        if (autoScroll) {
          auto();
        }
        return () => clearInterval(slideInterval);
      }, [slideIndex]);

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className={Styles.container_slider}>
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    // className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    className={ Styles.slide + ' ' + ( slideIndex === index + 1  ? Styles.active_anim : '' ) }
                    >
                        <img 
                        src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} 
                        />
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className={Styles.container_dots}>
                {Array.from({length: 9}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1) }
                    // className={slideIndex === index + 1 ? "dot active" : "dot"}
                    className={ Styles.dot + ' ' + ( slideIndex === index + 1  ? Styles.active : '' ) }
                    ></div>
                ))}
            </div>
        </div>
    )
}
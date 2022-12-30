
import React, { useEffect, useState } from "react";
import "./carousel.css";

function Carousel({ images }) {
    const [current, setCurrent] = useState(0);


    const autoScroll = true;
    let slideInterval;
    let intervalTime = 20000;


    function auto() {
        slideInterval = setInterval(slideRight, intervalTime);
    }

    useEffect(() => {
        setCurrent(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [current]);

    const slideRight = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    };
    console.log(current);

    return (
        <div
            className="carousel flex w-full h-[30rem] lg:h-[90vh]"
        >
            <div className="carousel_wrapper ">
                {images.map((image, index) => {
                    return (
                        /* (condition) ? true : false */

                        <div
                            key={index}
                            className={
                                index === current
                                    ? "carousel_card carousel_card-active"
                                    : "carousel_card"
                            }
                        >
                            {index === current && (
                                <>
                                    <img className="card_image" src={image.url} alt="" />
                                    <div className="card_overlay">
                                        <div className="w-full sm:w-[25.5rem] md:w-[25.5rem] lg:w-[35rem] absolute top-5 lg:top-56 left-5 lg:left-24 flex-col">
                                            <span className="loycy-regular loycy-400 text-[25px] sm:text-[25px] md:text-[40px] lg:text-[40px] leading-10 lg:leading-[49px] loycy-dark uppercase">{image.title} <span>{image.tip}</span></span>
                                            <div className="slider__border__line w-60 lg:w-80 h-3 mt-2"></div>
                                            <p className="loycy-regular loycy-18 loycy-dark py-4 mb-5">{image.desc}</p>
                                            <a href="/about">
                                                <span className="loycy-btn py-4 px-7 loycy-inter loycy-500 loycy-18 loycy-light">Discover More</span>
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )
                            }
                        </div>
                    );
                })}
                {/* <div className="carousel_arrow_left" onClick={slideLeft}>
                    &lsaquo;
                </div>
                <div className="carousel_arrow_right" onClick={slideRight}>
                    &rsaquo;
                </div> */}
                <div className="carousel_pagination">
                    {images.map((_, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    index === current
                                        ? "pagination_dot pagination_dot-active"
                                        : "pagination_dot"
                                }
                                onClick={() => setCurrent(index)}
                            ></div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
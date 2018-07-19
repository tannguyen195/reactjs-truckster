import React, { Component } from 'react'
import Carousel from 'nuka-carousel'

import './_customCarousel.less'
const arrowRightIcon = require("/static/images/arrow-right-icon.png")
const arrowLeftIcon = require("/static/images/arrow-left-icon.svg")
class CustomCarousel extends Component {

    render() {
        const { children, slideToShow } = this.props
        return (
            <Carousel renderBottomCenterControls={()=>{}} slidesToShow={slideToShow} renderCenterLeftControls={({ previousSlide }) => (
                <button className="carousel-button" onClick={previousSlide}>
                    <img alt="left" src={arrowLeftIcon} />
                </button>
            )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button className="carousel-button" onClick={nextSlide}>
                        <img alt="right" src={arrowRightIcon} />
                    </button>
                )} >
                {children}
            </Carousel>
        )
    }
}

export default CustomCarousel;

import React, { Component } from 'react'
import Carousel from 'nuka-carousel'

import stylesheet from './_customCarousel.less'
const arrowRightIcon = ("/static/images/arrow-right-icon.png")
const arrowLeftIcon =   ("/static/images/arrow-left-icon.svg")
class CustomCarousel extends Component {

    render() {
        const { children, slideToShow } = this.props
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
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
            </div>
           
        )
    }
}

export default CustomCarousel;

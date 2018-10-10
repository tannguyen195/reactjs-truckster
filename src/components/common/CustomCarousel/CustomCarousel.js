import React, { Component } from 'react'
import Carousel from 'nuka-carousel'


const arrowRightIcon = ("/static/images/arrow-right-icon.png")
const arrowLeftIcon = ("/static/images/arrow-left-icon.svg")
class CustomCarousel extends Component {

    render() {
        const { children, slideToShow } = this.props
        return (

            <Carousel
                slidesToShow={slideToShow}
                renderBottomCenterControls={() => { }}
                renderCenterLeftControls={({ previousSlide }) => (
                    <button className="carousel-button" onClick={previousSlide}>
                        <img alt="left" src={arrowLeftIcon} />
                    </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button className="carousel-button" onClick={nextSlide}>
                        <img alt="right" src={arrowRightIcon} />
                    </button>
                )}
            >
                {children}
            </Carousel>


        )
    }
}

export default CustomCarousel;

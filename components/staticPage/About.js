import React, { Component } from 'react';
import { Button } from 'antd'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import './_about.less'
const aboutImage = require("../../../assets/images/cover-about.jpg")
const checkIcon = require("../../../assets/images/check-icon.svg")
class About extends Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <Fade>
                <div className="about-container  main-wrapper">
                    <div className="home-main-header" style={{ backgroundImage: `url(${aboutImage})` }} >
                        <div className="content-city">
                            <div className="title DisplayBlackCenter">
                                Everything you need
        to know about Truckster
                        </div>
                        </div>

                        <div className="cover">
                            <div className="cover-mask"></div>
                        </div>

                    </div>
                    <div className="about-body">
                        <div className="padding-bottom Body-2GreyLeft">{`After running a food truck for four years in Denver, it became apparent to Connor that food trucks and consumers need a better way to connect. Few consumers are willing to follow multiple food trucks to find their locations, while food trucks are continuously on the move, creating a difficult environment for the love affair to work. Throw breweries into the mix and it becomes increasingly hard to plan a day that includes one of your favorite breweries and trucks.

Connor and his wife Molly teamed up to build Truckster, your hub for everything food trucks. We love the food truck movement and how it is constantly evolving, delivering creative, delicious food that is accessible to everyone, all through a unique experience. Our goal is to be a tool that helps grow the food truck industry and the culinary joy it brings. Whether you are traveling to a new city, in an unfamiliar part of your home city, or are just a foodie on the go, Truckster will elevate your food truck experience.`}</div>
                        <div className="SubheadingBlackLeft about-title">
                            Truckster enables consumers to:     </div>
                        <span className="list-about">
                            <img alt="icon-check" src={checkIcon} />
                            <div className="Body-2GreyLeft">
                                Explore the best food trucks and breweries  </div>
                        </span>
                        <span className="list-about">
                            <img alt="icon-check" src={checkIcon} />
                            <div className="Body-2GreyLeft">
                                Use a map to find nearby food trucks  </div>
                        </span>
                        <span className="list-about">
                            <img alt="icon-check" src={checkIcon} />
                            <div className="Body-2GreyLeft">
                                View ratings and reviews  </div>
                        </span>
                        <span className="list-about">
                            <img alt="icon-check" src={checkIcon} />
                            <div className="Body-2GreyLeft">
                                Skip the lines with mobile ordering </div>
                        </span>

                        <span className="list-about">
                            <img alt="icon-check" src={checkIcon} />
                            <div className="Body-2GreyLeft">
                                Share events, trucks, and breweries with friends  </div>
                        </span>
                        <span className="list-about padding-bottom">
                            <img alt="icon-check" src={checkIcon} />
                            <div className="Body-2GreyLeft">
                                Follow your favorite food trucks and breweries all on one platform  </div>
                        </span>

                        <div className="SubheadingBlackLeft about-title">
                            For food trucks and breweries, Truckster delivers:   </div>
                        <span className="list-about">
                            <img alt="icon-check" src={checkIcon} />
                            <div className="Body-2GreyLeft">
                                Increased sales opportunities through mobile ordering</div>
                        </span>
                        <span className="list-about">
                            <img alt="icon-check" src={checkIcon} />
                            <div className="Body-2GreyLeft">
                                Integration into popular POS systems, easing the process workflow </div>
                        </span>
                        <span className="list-about">
                            <img alt="icon-check" src={checkIcon} />
                            <div className="Body-2GreyLeft">
                                Enhanced consumer relationship  </div>
                        </span>
                        <span className="list-about">
                            <img alt="icon-check" src={checkIcon} />
                            <div className="Body-2GreyLeft">
                                Outsourced marketing service </div>
                        </span>

                        <span className="list-about padding-bottom">
                            <img alt="icon-check" src={checkIcon} />
                            <div className="Body-2GreyLeft">
                                Dashboards and analytics </div>
                        </span>
                        <span className="list-about">
                            <div className="Body-2GreyLeft">
                                Truckster is new, fun, and the best way to eat through your city. What are you waiting for? It's time to jump on board! #Truckyeah!  </div>
                        </span>

                    </div>

                    <div className="not-find">
                        <div className="title Display-2BlackCenter">
                            Not finding what you looking for?
                            </div>
                        <div className="button-contact">
                            <Link to="/contact" >
                                <Button type="primary">
                                    <div className="ButtonWhiteCenter">
                                        CONTACT US
                                </div>
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </Fade>
        )
    }
}

export default About;

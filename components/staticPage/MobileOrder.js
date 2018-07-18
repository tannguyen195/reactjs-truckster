import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import Fade from 'react-reveal/Fade';
import FooterContainer from '../footer/FooterContainer.js'
import { Row, Col } from 'antd'
import './_mobileOrder.less'

class MobileOrder extends Component {

    componentWillMount() {
        window.scrollTo(0, 0)
    }

    render() {

        return (
            <Fade>
                <div >


                    <Parallax className="landing-page-container" ref="parallax" pages={3}>

                        <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#fafafa' }} />
                        <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                        <Parallax.Layer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                        <Parallax.Layer
                            offset={0}
                            speed={0.5}

                            onClick={() => this.refs.parallax.scrollTo(1)}>
                            <Row>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                        </Parallax.Layer>

                        <Parallax.Layer
                            offset={1}
                            speed={-0.1}

                            onClick={() => this.refs.parallax.scrollTo(2)}>
                            Another page ...
</Parallax.Layer>

                        <Parallax.Layer
                            offset={2}
                            speed={0.5}

                            onClick={() => this.refs.parallax.scrollTo(0)}>
                            The end.
                    </Parallax.Layer>

                    </Parallax>
                </div>
            </Fade>
        )
    }
}

export default MobileOrder;

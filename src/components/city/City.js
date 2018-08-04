import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'routes'
import CityCard from '../common/cityCard/CityCard'

import stylesheet from './_city.less'


const cities =
    [
        {
            isComing: true,
            name: 'Aurora',
            image: ('/static/images/cities/Aurora.jpeg')
        },
        {
            isComing: true,
            name: 'Boulder',
            image: ('/static/images/cities/Boulder.jpg')
        },
        {
            isComing: true,
            name: 'Colorado Springs',
            image: ('/static/images/cities/ColoradoSprings.jpg')
        },
        {

            name: 'Denver',
            image: ('/static/images/cities/Denver.jpeg'),
            truckNum: 461
        },
        {
            isComing: true,
            name: 'Fort Collins',
            image: ('/static/images/cities/FortCollins.jpg')
        },

    ]


class City extends Component {

    // render category card 
    renderCityCard(cities) {
        return cities.map((item, index) => {
            return <Col key={index} style={{ marginBottom: "16px" }} span={6}>
                {
                    item.isComing ? <CityCard
                        isComing={item.isComing}
                        truckNum={item.truckNum}
                        image={item.image}
                        name={item.name} /> : <Link to={`/co/${item.name.toLowerCase()}`}>
                            <a>
                                <CityCard
                                    isComing={item.isComing}
                                    truckNum={item.truckNum}
                                    image={item.image}
                                    name={item.name} />
                            </a>
                        </Link>
                }

            </Col>
        })
    }


    render() {

        return (
            <div className="category">
                <div className=" main-wrapper body-content">
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }}></style>
                    <div className="body-title DisplayBlackLeft">
                        All cities
                </div>
                    <div className="divider"> </div>
                    <Row style={{ paddingTop: "30px" }} gutter={16}>
                        {this.renderCityCard(cities)}

                    </Row>

                </div>
            </div>
        )


    }
}

export default City

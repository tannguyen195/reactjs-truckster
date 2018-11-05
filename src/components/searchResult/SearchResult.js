import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Section from '../common/section/Section'
import TruckCard from '../common/truckCard/TruckCard'
import RenderContainer from '../common/renderContainer/RenderContainer'
import CategoryCard from '../common/categoryCard/CategoryCard'
import TruckNewCard from '../common/truckNewCard/TruckNewCard'
import { Link } from 'routes'
const imageBreweryPlaceholder = ("/static/images/image_brewery_placeholder.png")
const breweryIcon = ('/static/images/brewery-marker-icon.png')
class SearchResult extends Component {
    // render brewery card 
    renderBreweryCard(brewerySearch) {

        return brewerySearch.map((item, index) => {
            if (item.type === "brewery")
                return <Col xs={24} sm={12} md={8} lg={8} style={{ marginBottom: "16px" }} key={index} >
                    <TruckNewCard data={
                        {
                            url: "/brewery/" + item.slug,
                            image: JSON.parse(item.cover_photo) && JSON.parse(item.cover_photo)[0] ?
                                JSON.parse(item.cover_photo)[0].url : breweryIcon,
                            logo: JSON.parse(item.logo) && JSON.parse(item.logo)[0] ?
                                JSON.parse(item.logo)[0].url :
                                imageBreweryPlaceholder,
                            name: item.name,
                            cuisine: item.brewery_type && [{ name: item.brewery_type.name }] || [],
                            rating: parseFloat((Math.round(item.rating * 2) / 2).toFixed(1), 10)
                        }
                    } />

                </Col>
            else return null
        })
    }
    // render category card 
    renderCategoryCard(categories) {
        return categories.map((item, index) => {
            if (item.type === "cuisine")
                return <Col key={index} style={{ marginBottom: "16px" }} span={6}>
                    <Link prefetch to={`/cuisine/${item.link.toLowerCase()}`}>
                        <a>
                            <CategoryCard
                                image={item.image}
                                name={item.name}  >
                            </CategoryCard>
                        </a>

                    </Link>
                </Col>
            else return null
        })
    }

    // render truck card 
    renderTruckCard(truckSearch) {
        return truckSearch.map((item, index) => {

            if (item.type === "truck")
                return <Col xs={24} sm={12} md={8} lg={8} style={{ marginBottom: "16px" }} key={index} >
                    <TruckCard
                        data={{
                            ...item,
                            cover_photo: JSON.parse(item.cover_photo),
                            logo: JSON.parse(item.logo),
                        }}>
                    </TruckCard>
                </Col>
            else return null
        })
    }
    render() {
        const { searchResult, param } = this.props
        return (
            <div className="search-result main-wrapper body-content">

                {
                    searchResult &&
                        searchResult.length === 0 ?
                        <div className="error-holder">
                            <RenderContainer
                                error={true}
                                message={`We couldn’t find any results for "${param}"`} >

                            </RenderContainer>
                        </div>
                        :
                        <div className="search-detail-container">
                            <div className="detail-header">
                                <h1 className="name DisplayBlackLeft">Search results for "{`${param}`}"</h1>
                            </div>

                            <hr />
                            <div className="detail-body">
                                <section>
                                    {/* <div className="search-section-title Display-2BlackLeft">Cuisine</div> */}
                                    <Row gutter={16}>
                                        {this.renderCategoryCard(searchResult)}
                                    </Row>
                                </section>

                                <section>
                                    <div className="search-section-title Display-2BlackLeft">Food Truck</div>
                                    <Row gutter={16}>
                                        {this.renderTruckCard(searchResult)}
                                    </Row>
                                </section>
                                <section>
                                    <div className="search-section-title Display-2BlackLeft">Brewery</div>
                                    <Row gutter={16}>
                                        {this.renderBreweryCard(searchResult)}
                                    </Row>

                                </section>
                            </div>
                        </div>
                }
            </div >
        )


    }
}

export default SearchResult

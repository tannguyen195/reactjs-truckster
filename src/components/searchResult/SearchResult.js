import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Section from '../common/section/Section'
import TruckCard from '../common/truckCard/TruckCard'
import RenderContainer from '../common/renderContainer/RenderContainer'
import CategoryCard from '../common/categoryCard/CategoryCard'
import TruckNewCard from '../common/truckNewCard/TruckNewCard'
import { Link } from 'routes'
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
                            image: item.cover_photo ?
                                item.cover_photo[0].url : breweryIcon,
                            logo: item.logo ?
                                item.logo[0].url :
                                imageBreweryPlaceholder,
                            name: item.name,
                            cuisine: item.breweries_type && [{ name: item.breweries_type.name }],
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
                    <Link to={`/cuisine/${item.name}`}>
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
                        data={item}>
                    </TruckCard>
                </Col>
            else return null
        })
    }
    render() {
        const { searchResult, params } = this.props
        return (
            <div className="search-result main-wrapper body-content">

                {
                    searchResult &&
                        searchResult.length === 0 ?
                        <div className="error-holder">
                            <RenderContainer
                                error={true}
                                message={`We couldn’t find any results for "${params}"`} >

                            </RenderContainer>
                        </div>
                        :
                        <div className="search-detail-container "   >
                            <div className="detail-header">
                                <div className="name DisplayBlackLeft">Search results for "{`${params}`}"</div>
                            </div>

                            <hr />
                            <div className="detail-body">
                                <Section
                                    title="Cuisine" >
                                    <Row gutter={16}>
                                        {this.renderCategoryCard(searchResult)}
                                    </Row>
                                </Section>

                                <Section
                                    url="/"
                                    title="Food trucks" >
                                    <Row gutter={16}>
                                        {this.renderTruckCard(searchResult)}
                                    </Row>

                                </Section>
                                <Section
                                    url="/"
                                    title="Breweries" >
                                    <Row gutter={16}>
                                        {this.renderBreweryCard(searchResult)}
                                    </Row>

                                </Section>
                            </div>
                        </div>
                }
            </div >
        )


    }
}

export default SearchResult

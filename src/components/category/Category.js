import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'routes'
import CategoryCard from '../common/categoryCard/CategoryCard'
import { categories } from '../data'

class Category extends Component {

    // render category card 
    renderCategoryCard(categories) {
        return categories.map((item, index) => {
            return <Col lg={6} md={12} sm={12} xs={12} key={index} style={{ marginBottom: "16px" }}>
                <Link prefetch to={`/food-truck/co/denver/${item.name && item.name.toLowerCase().replace(" ", "-")}`}>
                    <a>
                        <CategoryCard
                            image={item.image_url}
                            name={item.name}  >
                        </CategoryCard>
                    </a>
                </Link>
            </Col>
        })
    }


    render() {
        const { cuisineList } = this.props
        return (
            <div className="category main-wrapper body-content">

                <h1 className="body-title DisplayBlackLeft">
                    Cuisine
                </h1>
                <div className="divider"> </div>
                <Row style={{ paddingTop: "30px" }} gutter={16}>
                    {this.renderCategoryCard(cuisineList)}

                </Row>

            </div>
        )


    }
}

export default Category

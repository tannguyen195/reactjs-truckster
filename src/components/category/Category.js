import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import CategoryCard from '../common/categoryCard/CategoryCard'

import './_category.less'


const categories =
[
    {
        name: 'Multi-Cuisine',
        image: require('/static/images/cuisines/Multi-Cuisine.jpeg')
    },
    {
        name: 'American',
        image: require('/static/images/cuisines/American.jpg')
    },
    {
        name: 'Asian',
        image: require('/static/images/cuisines/Asian.jpg')
    },
    {
        name: 'BBQ',
        image: require('/static/images/cuisines/BBQ.jpg')
    },
    {
        name: 'Brazilian',
        image: require('/static/images/cuisines/Brazilian.jpg')
    },
    {
        name: 'Breakfast',
        image: require('/static/images/cuisines/Breakfast.jpg')
    },
    {
        name: 'Burgers',
        image: require('/static/images/cuisines/Burgers.jpg')
    },
    {
        name: 'Cajun_Creole',
        image: require('/static/images/cuisines/Cajun_Creole.jpg')
    },
    {
        name: 'Carribian',
        image: require('/static/images/cuisines/Carribian.jpeg')
    },
    {
        name: 'Chicago',
        image: require('/static/images/cuisines/Chicago.jpg')
    },
    {
        name: 'Chinese',
        image: require('/static/images/cuisines/Chinese.jpg')
    },
    {
        name: 'Coffee',
        image: require('/static/images/cuisines/Coffee.jpg')
    },
    {
        name: 'Columbian',
        image: require('/static/images/cuisines/Columbian.jpg')
    },
    {
        name: 'Crepes',
        image: require('/static/images/cuisines/Crepes.jpg')
    },
    {
        name: 'Cuban',
        image: require('/static/images/cuisines/Cuban.jpg')
    },
    {
        name: 'Dessert',
        image: require('/static/images/cuisines/Dessert.jpg')
    },
    {
        name: 'Ethiopian',
        image: require('/static/images/cuisines/Ethiopian.jpg')
    },
    {
        name: 'Farm Fresh',
        image: require('/static/images/cuisines/Farm_Fresh.jpg')
    },
    {
        name: 'Filipino',
        image: require('/static/images/cuisines/Filipino.jpg')
    },
    {
        name: 'French',
        image: require('/static/images/cuisines/French.jpg')
    },
    {
        name: 'German',
        image: require('/static/images/cuisines/German.jpg')
    },
    {
        name: 'Greek',
        image: require('/static/images/cuisines/Greek.jpg')
    },
    {
        name: 'Hawaiian',
        image: require('/static/images/cuisines/Hawaiian.jpg')
    },
    {
        name: 'Indian',
        image: require('/static/images/cuisines/Indian.jpg')
    },
    {
        name: 'Italian',
        image: require('/static/images/cuisines/Italian.jpg')
    },
    {
        name: 'Jamaican',
        image: require('/static/images/cuisines/Jamaican.jpg')
    },
    {
        name: 'Japanese',
        image: require('/static/images/cuisines/Japanese.jpg')
    },
    {
        name: 'Juice',
        image: require('/static/images/cuisines/Juice.jpg')
    },
    {
        name: 'Latin American',
        image: require('/static/images/cuisines/Latin_American.jpg')
    },
    {
        name: 'Latin Asian Fusion',
        image: require('/static/images/cuisines/Latin_Asian_Fusion.jpg')
    },
    {
        name: 'Mediterranean',
        image: require('/static/images/cuisines/Mediterranean.jpg')
    },
    {
        name: 'Mexican',
        image: require('/static/images/cuisines/Mexican.jpg')
    },
    {
        name: 'Middle Eastern',
        image: require('/static/images/cuisines/Middle_Eastern.jpg')
    },
    {
        name: 'Native American',
        image: require('/static/images/cuisines/Native_American.jpg')
    },
    {
        name: 'New England',
        image: require('/static/images/cuisines/New_England.jpg')
    },
    {
        name: 'Peruvian',
        image: require('/static/images/cuisines/Peruvian.jpg')
    },
    {
        name: 'Pizza',
        image: require('/static/images/cuisines/Pizza.jpg')
    },
    {
        name: 'Polish',
        image: require('/static/images/cuisines/Polish.jpg')
    },
    {
        name: 'Polynesian',
        image: require('/static/images/cuisines/Polynesian.jpg')
    },
    {
        name: 'Puertorican',
        image: require('/static/images/cuisines/Puertorican.jpg')
    },
    {
        name: 'Senegalese',
        image: require('/static/images/cuisines/Senegalese.jpg')
    },
    {
        name: 'Southern',
        image: require('/static/images/cuisines/Southern.jpg')
    },
    {
        name: 'Spanish',
        image: require('/static/images/cuisines/Spanish.jpg')
    },
    {
        name: 'Thai',
        image: require('/static/images/cuisines/Thai.jpg')
    },
    {
        name: 'Turkish',
        image: require('/static/images/cuisines/Turkish.jpg')
    },
    {
        name: 'Vegan',
        image: require('/static/images/cuisines/Vegan.jpg')
    },
    {
        name: 'Vegetarian',
        image: require('/static/images/cuisines/Vegetarian.jpg')
    },
    {
        name: 'Venezuelan',
        image: require('/static/images/cuisines/Venezuelan.jpg')
    },
    {
        name: 'Wings',
        image: require('/static/images/cuisines/Wings.jpg')
    },
]


class Category extends Component {

    // render category card 
    renderCategoryCard(categories) {
        return categories.map((item, index) => {
            return <Col key={index} style={{ marginBottom: "16px" }} span={6}>
                <Link to={`/truck/cuisine/${item.name}`}>

                    <CategoryCard
                        image={item.image}
                        name={item.name}  >
                    </CategoryCard>

                </Link>
            </Col>
        })
    }


    render() {

        return (
            <div className="category main-wrapper body-content">
                <div className="body-title DisplayBlackLeft">
                    Cuisine
                </div>
                <div className="divider"> </div>
                <Row style={{ paddingTop: "30px" }} gutter={16}>
                    {this.renderCategoryCard(categories)}

                </Row>

            </div>
        )


    }
}

export default Category

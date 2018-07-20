import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link } from 'routes'
import CategoryCard from '../common/categoryCard/CategoryCard'

import stylesheet from './_category.less'


const categories =
    [
        {
            name: 'Multi-Cuisine',
            image: ('/static/images/cuisines/Multi-Cuisine.jpeg')
        },
        {
            name: 'American',
            image: ('/static/images/cuisines/American.jpg')
        },
        {
            name: 'Asian',
            image: ('/static/images/cuisines/Asian.jpg')
        },
        {
            name: 'BBQ',
            image: ('/static/images/cuisines/BBQ.jpg')
        },
        {
            name: 'Brazilian',
            image: ('/static/images/cuisines/Brazilian.jpg')
        },
        {
            name: 'Breakfast',
            image: ('/static/images/cuisines/Breakfast.jpg')
        },
        {
            name: 'Burgers',
            image: ('/static/images/cuisines/Burgers.jpg')
        },
        {
            name: 'Cajun_Creole',
            image: ('/static/images/cuisines/Cajun_Creole.jpg')
        },
        {
            name: 'Carribian',
            image: ('/static/images/cuisines/Carribian.jpeg')
        },
        {
            name: 'Chicago',
            image: ('/static/images/cuisines/Chicago.jpg')
        },
        {
            name: 'Chinese',
            image: ('/static/images/cuisines/Chinese.jpg')
        },
        {
            name: 'Coffee',
            image: ('/static/images/cuisines/Coffee.jpg')
        },
        {
            name: 'Columbian',
            image: ('/static/images/cuisines/Columbian.jpg')
        },
        {
            name: 'Crepes',
            image: ('/static/images/cuisines/Crepes.jpg')
        },
        {
            name: 'Cuban',
            image: ('/static/images/cuisines/Cuban.jpg')
        },
        {
            name: 'Dessert',
            image: ('/static/images/cuisines/Dessert.jpg')
        },
        {
            name: 'Ethiopian',
            image: ('/static/images/cuisines/Ethiopian.jpg')
        },
        {
            name: 'Farm Fresh',
            image: ('/static/images/cuisines/Farm_Fresh.jpg')
        },
        {
            name: 'Filipino',
            image: ('/static/images/cuisines/Filipino.jpg')
        },
        {
            name: 'French',
            image: ('/static/images/cuisines/French.jpg')
        },
        {
            name: 'German',
            image: ('/static/images/cuisines/German.jpg')
        },
        {
            name: 'Greek',
            image: ('/static/images/cuisines/Greek.jpg')
        },
        {
            name: 'Hawaiian',
            image: ('/static/images/cuisines/Hawaiian.jpg')
        },
        {
            name: 'Indian',
            image: ('/static/images/cuisines/Indian.jpg')
        },
        {
            name: 'Italian',
            image: ('/static/images/cuisines/Italian.jpg')
        },
        {
            name: 'Jamaican',
            image: ('/static/images/cuisines/Jamaican.jpg')
        },
        {
            name: 'Japanese',
            image: ('/static/images/cuisines/Japanese.jpg')
        },
        {
            name: 'Juice',
            image: ('/static/images/cuisines/Juice.jpg')
        },
        {
            name: 'Latin American',
            image: ('/static/images/cuisines/Latin_American.jpg')
        },
        {
            name: 'Latin Asian Fusion',
            image: ('/static/images/cuisines/Latin_Asian_Fusion.jpg')
        },
        {
            name: 'Mediterranean',
            image: ('/static/images/cuisines/Mediterranean.jpg')
        },
        {
            name: 'Mexican',
            image: ('/static/images/cuisines/Mexican.jpg')
        },
        {
            name: 'Middle Eastern',
            image: ('/static/images/cuisines/Middle_Eastern.jpg')
        },
        {
            name: 'Native American',
            image: ('/static/images/cuisines/Native_American.jpg')
        },
        {
            name: 'New England',
            image: ('/static/images/cuisines/New_England.jpg')
        },
        {
            name: 'Peruvian',
            image: ('/static/images/cuisines/Peruvian.jpg')
        },
        {
            name: 'Pizza',
            image: ('/static/images/cuisines/Pizza.jpg')
        },
        {
            name: 'Polish',
            image: ('/static/images/cuisines/Polish.jpg')
        },
        {
            name: 'Polynesian',
            image: ('/static/images/cuisines/Polynesian.jpg')
        },
        {
            name: 'Puertorican',
            image: ('/static/images/cuisines/Puertorican.jpg')
        },
        {
            name: 'Senegalese',
            image: ('/static/images/cuisines/Senegalese.jpg')
        },
        {
            name: 'Southern',
            image: ('/static/images/cuisines/Southern.jpg')
        },
        {
            name: 'Spanish',
            image: ('/static/images/cuisines/Spanish.jpg')
        },
        {
            name: 'Thai',
            image: ('/static/images/cuisines/Thai.jpg')
        },
        {
            name: 'Turkish',
            image: ('/static/images/cuisines/Turkish.jpg')
        },
        {
            name: 'Vegan',
            image: ('/static/images/cuisines/Vegan.jpg')
        },
        {
            name: 'Vegetarian',
            image: ('/static/images/cuisines/Vegetarian.jpg')
        },
        {
            name: 'Venezuelan',
            image: ('/static/images/cuisines/Venezuelan.jpg')
        },
        {
            name: 'Wings',
            image: ('/static/images/cuisines/Wings.jpg')
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
                <style dangerouslySetInnerHTML={{ __html: stylesheet }}></style>
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

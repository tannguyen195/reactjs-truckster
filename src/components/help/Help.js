import React, { Component } from 'react';
import { Row, Col, AutoComplete, Button, Collapse } from 'antd';
import { Link } from 'routes'
import stylesheet from './_help.less'
const Panel = Collapse.Panel;
const plusIcon = ('/static/images/plus-icon.png')
// const minusIcon = require('/static/images/minus-icon.png')
const questions = [
    {
        question: "The food truck isn’t there, but Truckster says it should be?",
        answer: "This could be because of last minute changes or an early shift end for the food truck. Please send us a note on our Contact Us page to make us aware of the situation so we can improve our location tracking going forward."

    },
    {
        question: "When will mobile ordering be available ?",
        answer: "Mobile ordering is coming soon! We are working hard to have it ready for summer.Once it’s up and running, only food trucks using the Truckster application will be providing mobile ordering.See a truck you love that doesn’t offer it ? Let them know about us! We are here to benefit both you and the food truck!"

    }
    ,
    {
        question: "What are the taxes and processing fees for my mobile order ?",
        answer: "The taxes reflect sales tax charged by state and local government and are calculated based on where the transaction takes place.The processing fees are a convenience charge of $1 per order and are used to help bring you the best mobile ordering experience possible."

    }
    ,
    {
        question: "Should I tip the trucks when placing a mobile order ?",
        answer: "YES PLEASE! Food trucks and their staff work so hard to deliver delicious food to you and your friends.Please tip them as if you were ordering directly from the truck."

    }
    ,
    {
        question: "What can I do if my order is cancelled ?",
        answer: "You will receive a full refund to your card for any cancelled orders.Please reach out to us on our Contact Us page if you have any issues or questions."

    }
    ,
    {
        question: "How can I cancel my mobile order ?",
        answer: "Food trucks are fast workers and may have already started making your food.Please contact the truck directly to cancel the order.You can find the truck’s contact information on your order history and on the truck’s profile."

    }
    ,
    {
        question: "Is my information safe on Truckster ? Should I save my credit card info on my profile ?",
        answer: "We are dedicated to providing a fun and safe platform for consumers, food trucks, and breweries.Your credit card information is protected on our system and will not be shared.It is similar to how Square remembers your credit card and your receipt delivery preferences(like your email)."

    }

]

const questions1 = [
    {
        question: "How do I update my profile and schedule?",
        answer: `We are developing a vendor specific version of Truckster, where you can manage all your information, facilitate mobile ordering, and track a dashboard of helpful analytics specific to your truck. 
        More questions? Please send us a note under Contact Us and we will reach out to you ASAP.  
        `

    },
]
const questions2 = [
    {
        question: "How do I update my profile and schedule?",
        answer: `We are developing a vendor specific version of Truckster, where you can manage all your information.
        More questions? Please send us a note under Contact Us and we will reach out to you ASAP.  
        `
    },
]
class Help extends Component {


    renderQuestion(questions) {
        return questions.map((item, index) => {
            return <Panel showArrow={false} header={
                <div className="collapse-header Body-2LeftBlack">
                    {item.question}
                    <div className="icon">
                        <img alt="expand" src={plusIcon} />
                    </div>
                </div>
            } key={index}>
                <p className="Body-1RegularGrayLeft answer">  {item.answer}</p>
            </Panel>

        })
    }
    render() {
        const { callback } = this.props
        return (
            <div >
                <style dangerouslySetInnerHTML={{ __html: stylesheet }}></style>
                <div className="help-container">
                    <div className="help-main-header">
                        <div className="title-help DisplayBlackCenter ">
                            Help center
                    </div>
                        <div className="search-help">

                            <AutoComplete
                                className="certain-category-search"
                                dropdownClassName="certain-category-search-dropdown"
                                dropdownMatchSelectWidth={false}
                                dropdownStyle={{ width: 300 }}
                                size="large"
                                style={{ width: '100%' }}
                                placeholder="Type your question here"
                                optionLabelProp="value"
                            >

                            </AutoComplete>
                            <div className="button-find">
                                <Button icon="search" className="search-btn" size="large" type="primary">

                                </Button>
                            </div>

                        </div>
                    </div>
                    <div className="help-body">
                        <Row className="content-help" gutter={25}>
                            <Col lg={12} mg={12}>
                                <div className="help-card">
                                    <div className="title Display-2BlackLeft">
                                        General Questions
                                </div>
                                    <div className="content">
                                        <Collapse onChange={callback} >
                                            {this.renderQuestion(questions)}
                                        </Collapse>
                                        {/* {this.renderHelpCard(questions)} */}
                                    </div>
                                </div>
                            </Col>
                            <Col lg={12} mg={12}>
                                <div className="help-card">
                                    <div className="title Display-2BlackLeft">
                                        Food Truck Vendors
                                </div>
                                    <div className="content">
                                        <Collapse onChange={callback} >
                                            {this.renderQuestion(questions1)}
                                        </Collapse>
                                    </div>
                                </div>

                                <div style={{ marginTop: '30px' }} className="help-card">
                                    <div className="title Display-2BlackLeft">
                                        Breweries
                                </div>
                                    <div className="content">
                                        <Collapse onChange={callback} >
                                            {this.renderQuestion(questions2)}
                                        </Collapse>
                                    </div>
                                </div>
                            </Col>
                        </Row>

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
            </div>
        )


    }
}

export default Help

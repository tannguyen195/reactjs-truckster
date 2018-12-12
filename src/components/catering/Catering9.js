
import React, { Component } from 'react';
import { DatePicker, Form, Button } from 'antd';
import { Link } from 'routes'
import _ from 'lodash'
const FormItem = Form.Item;
export default class extends Component {


    render() {
        const { cuisineList, handleAddCuisine, cuisine } = this.props
        const { getFieldDecorator } = this.props.form
   


        return (
            <div className="catering9-container">
                <div className="catering-section-title">Choose one or multiple cuisine types</div>

                <FormItem>
                    {getFieldDecorator('cuisine', {

                    })(
                        <div className="cuisine__button-container">
                            {
                                cuisineList.length > 0 &&
                                cuisineList.map((item, index) => {
                                   
                                    return <div key={item.id} className="cuisine__button">
                                        <Button type={cuisine.includes(item.id) ? "primary" : "default"} onClick={() => handleAddCuisine(item)}>{item.name}</Button>
                                    </div>
                                })
                            }
                        </div>
                    )}
                </FormItem>

            </div>
        )
    }
}


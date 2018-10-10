
import React, { Component } from 'react';
import { Form, Input, Cascader } from 'antd';
import { residences } from '../data'
import { Link } from 'routes'
const FormItem = Form.Item;
export default class extends Component {

    componentDidMount() {
        const {
            form, cateringData
        } = this.props
        form.setFieldsValue({
            address: cateringData.address,
            residence: cateringData.residence ? cateringData.residence : ['colorado', 'denver'],
            zip_code: cateringData.zip_code
        })
    }
    render() {
        const { } = this.props
        const { getFieldDecorator } = this.props.form
        return (
            <div className="catering3-container">

                <div className="catering-section-title">Event Address</div>
                <div>
                    <FormItem className="marginBottom16">
                        {getFieldDecorator('address', {
                            rules: [{
                                required: true, message: `Please enter address!`,
                            }],
                        })(
                            <Input placeholder="Enter address" />
                        )}
                    </FormItem>
                    <div className="catering3-address">
                        <FormItem className="catering3-residence marginBottom40"  >
                            {getFieldDecorator('city', {
                                initialValue: ['colorado', 'denver'],
                                rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                            })(
                                <Cascader options={residences} />
                            )}
                        </FormItem>

                        <FormItem className="marginBottom40">
                            {getFieldDecorator('zip_code', {
                                initialValue: 0,
                                rules: [{
                                    message: `Please enter zipcode!`, pattern: "[0-9]"
                                }],
                            })(
                                <Input placeholder="Zip code" />
                            )}
                        </FormItem>
                    </div>


                </div>
            </div>
        )


    }
}


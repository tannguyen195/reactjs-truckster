
import React, { Component } from 'react';
import { Form, Input } from 'antd';
import { Link } from 'routes'
const FormItem = Form.Item;
const userIcon = ('/static/images/user-icon.png')
const mailIcon = ('/static/images/mail-icon.png')

const phoneIcon = ('/static/images/phone-icon.png')
export default class extends Component {
    componentDidMount() {
        const {
            form, nextStep, cateringData
        } = this.props
        form.setFieldsValue({
            email: cateringData.email,
            name: cateringData.name,
            phone: cateringData.phone
        })
    }


    render() {
        const { } = this.props
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="catering1-container">

                <div className="catering-section-title">How we can reach you?</div>
                <div>
                    <FormItem className="marginBottom16">
                        {getFieldDecorator('name', {
                            rules: [{
                                required: true, message: `Please enter your name`,
                            }],
                        })(
                            <Input
                                suffix={<img
                                    className="img-icon"
                                    alt="email"
                                    src={userIcon} />} placeholder="Your Name" />
                        )}
                    </FormItem>
                    <FormItem className="marginBottom16">
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: `It not a valid email address`,
                            }, {
                                required: true, message: `Please enter your email`,
                            }],
                        })(
                            <Input
                                suffix={<img
                                    className="img-icon"
                                    alt="email"
                                    src={mailIcon} />} placeholder="Email Address" />
                        )}
                    </FormItem>

                    <FormItem className="marginBottom40">
                        {getFieldDecorator('phone', {
                            rules: [{
                                required: true, message: `Please enter your phone number`,
                                pattern: "[0-9]"
                            }],
                        })(
                            <Input
                                suffix={<img
                                    className="img-icon"
                                    alt="phone"
                                    src={phoneIcon} />} placeholder="Phone number" />
                        )}
                    </FormItem>
                </div>
            </div>
        )
    }
}


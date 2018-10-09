
import React, { Component } from 'react';
import { Form, Button, Radio } from 'antd';
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const groupIcon = '/static/images/group-icon.svg'
const userIcon = '/static/images/user-icon-black.svg'
export default class extends Component {
    componentDidMount() {
        const {
            form, cateringData
        } = this.props
        form.setFieldsValue({
            paying: cateringData.paying
        })
    }
    render() {
        const { } = this.props
        const { getFieldDecorator } = this.props.form
        return (
            <div className="catering7-container">
                <div className="catering-section-title">Who will be paying?</div>
                <FormItem >
                    {getFieldDecorator('paying', {
                    })(
                        <RadioGroup className="catering5-button-paying">
                            <Radio value={"Host"}>
                                <div className="paying-button">
                                    <img src={userIcon} alt="user" />
                                    Host
                                    </div>
                            </Radio>
                            <Radio value={"Attendees"}>
                                <div className="paying-button">
                                    <img src={groupIcon} alt="group" /> Attendees</div>
                            </Radio>
                        </RadioGroup>
                    )}
                </FormItem>
            </div>
        )
    }
}


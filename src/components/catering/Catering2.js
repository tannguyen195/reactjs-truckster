
import React, { Component } from 'react';
import { DatePicker, Form, TimePicker } from 'antd';
import { Link } from 'routes'
const FormItem = Form.Item;
export default class extends Component {

    componentDidMount() {
        const {
            form, cateringData
        } = this.props
        form.setFieldsValue({
            eventDate: cateringData.eventDate,
            start_time: cateringData.start_time,
            end_time: cateringData.end_time
        })
    }
    render() {
        const { } = this.props
        const { getFieldDecorator } = this.props.form
        return (
            <div className="catering2-container">
                <div className="catering-section-title">Date of event</div>

                <FormItem className="form-login">
                    <div className="paddingBottom8 LabelGreyLeft">Date of event</div>
                    {getFieldDecorator('eventDate', {
                        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
                    })(
                        <DatePicker />
                    )}
                </FormItem>

                <div className="catering-time">

                    <FormItem    >
                        <div className="paddingBottom8 LabelGreyLeft">Start Time</div>
                        {getFieldDecorator('start_time', { rules: [{ type: 'object', required: true, message: 'Please select time!' }] })(
                            <TimePicker format="HH:mm" />
                        )}
                    </FormItem>

                    <FormItem    >
                        <div className="paddingBottom8 LabelGreyLeft">End Time</div>
                        {getFieldDecorator('end_time', { rules: [{ type: 'object', required: true, message: 'Please select time!' }] })(
                            <TimePicker format="HH:mm" />
                        )}
                    </FormItem>
                </div>
            </div>
        )
    }
}


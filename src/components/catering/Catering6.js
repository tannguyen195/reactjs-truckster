
import React, { Component } from 'react';
import { Form, Input, Icon } from 'antd';

const FormItem = Form.Item;
export default class extends Component {
    componentDidMount() {
        const {
            form, cateringData
        } = this.props
        form.setFieldsValue({
            participants: cateringData.participants,
        })
    }

    render() {
        const { } = this.props
        const { getFieldDecorator } = this.props.form
        return (
            <div className="catering5-container">

                <div className="catering-section-title">How many estimated participants?</div>
                <div className="paddingLeftRight56">
                    <FormItem className="marginBottom40">
                        {getFieldDecorator('participants', {
                            rules: [{
                                message: `Please enter number!`, pattern: '[0-9]'
                            }],
                        })(
                            <Input type="number" />
                        )}
                    </FormItem>


                </div>
            </div>
        )


    }
}


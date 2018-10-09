
import React, { Component } from 'react';
import { Form, Input, Icon } from 'antd';
import { residences } from '../data'
import { Link } from 'routes'
const FormItem = Form.Item;
export default class extends Component {

    componentDidMount() {
        const {
            form, cateringData
        } = this.props
        form.setFieldsValue({
            budget: cateringData.budget,
        })
    }
    render() {
        const { } = this.props
        const { getFieldDecorator } = this.props.form
        return (
            <div className="catering5-container">

                <div className="catering-section-title">What’s your budget?</div>
                <div className="paddingLeftRight56">
                    <FormItem className="marginBottom40">
                        {getFieldDecorator('budget', {
                            rules: [{
                                message: `Please enter number!`, pattern: '[0-9]'
                            }],
                        })(
                            <Input
                                prefix={<Icon type="dollar" theme="outlined" />}
                            />
                        )}
                    </FormItem>


                </div>
            </div>
        )


    }
}


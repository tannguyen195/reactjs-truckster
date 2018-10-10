
import React, { Component } from 'react';
import { Form, Input, Radio } from 'antd';
import { residences } from '../data'
import { Link } from 'routes'
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
export default class extends Component {

    componentDidMount() {
        const {
            form, cateringData, occasion
        } = this.props
        form.setFieldsValue({
            occasion: cateringData.occasion,
        })
    }
    render() {
        const { form, occasion, onOccasionChange } = this.props
        const { getFieldDecorator } = form
        return (
            <div className="catering4-container">

                <div className="catering-section-title">What’s the Occasion?</div>
                <div>
                    <FormItem className="marginBottom16">
                        {getFieldDecorator('occasion', {
                            initialValue: "Birthday"
                        })(
                            <RadioGroup>
                                <Radio value={"Birthday"}>Birthday</Radio>
                                <Radio value={"Wedding"}>Wedding</Radio>
                                <Radio value={"Corporate"}>Corporate</Radio>
                                <Radio value={occasion}>
                                    <Input value={occasion} onChange={onOccasionChange} style={{ width: "100%", maxWidth: 400 }} />
                                </Radio>
                            </RadioGroup>
                        )}
                    </FormItem>



                </div>
            </div>
        )


    }
}


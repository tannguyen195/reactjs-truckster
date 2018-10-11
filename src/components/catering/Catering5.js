
import React, { Component } from 'react';
import { Form, InputNumber, Icon } from 'antd';
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
                           
                        })(
                            <InputNumber
                               
                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                type="text"
                                min={0}
                                prefix={< Icon type="dollar" theme="outlined" />}
                            />
                        )}
                    </FormItem>


                </div>
            </div>
        )


    }
}


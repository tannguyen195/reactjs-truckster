
import React, { Component } from 'react';
import { Form, Input, Icon } from 'antd';
const TextArea = Input.TextArea
const FormItem = Form.Item;
export default class extends Component {

    componentDidMount() {
        const {
            form, cateringData
        } = this.props
        form.setFieldsValue({
            comment: cateringData.comment,
        })
    }
    render() {
        const { } = this.props
        const { getFieldDecorator } = this.props.form
        return (
            <div className="catering5-container">

                <div className="catering-section-title">Additional Comments</div>
                <div>
                    <FormItem className="marginBottom40">
                        {getFieldDecorator('comment', {

                        })(
                            <TextArea placeholder="Dietary restrictions, etc." />
                        )}
                    </FormItem>


                </div>
            </div>
        )


    }
}


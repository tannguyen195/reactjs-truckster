import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Catering from './Catering'
import _catering from './_catering.less'
import { Form } from 'antd'
import { toggleCateringModal } from '../../actions/toggleAction'
import { nextStep, previousStep } from '../../actions/cateringAction'

class CateringContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            occasion: ""
        }
    }
    handleSubmitForm = () => {
        window.open('mailto:test@example.com?subject=subject&body=body')
    }
    onOccasionChange = (e) => {
        const { setFieldsValue } = this.props.form
        setFieldsValue({
            occasion: e.target.value,
        })
        this.setState({
            occasion: e.target.value
        })
    }
    onPreviousStep() {
        this.props.previousStep()
    }
    handleSubmit = (e) => {
        const {
            form, nextStep, cateringData
        } = this.props
        e.preventDefault();
        form.validateFieldsAndScroll((err, values) => {

            if (!err) {
                form.setFieldsValue({
                    email: values.email
                })
                nextStep(values)

            }
        });
    }
    render() {


        return (
            <div>
                <style dangerouslySetInnerHTML={{
                    __html: _catering
                }} />
                <Catering
                    handleSubmit={this.handleSubmit}
                    handleSubmitForm={this.handleSubmitForm}
                    onOccasionChange={this.onOccasionChange}
                    onPreviousStep={() => { this.onPreviousStep() }}
                    {...this.state}
                    {...this.props}
                />
            </div>
        )
    }
}

export function mapStateToProps(state) {
    return {
        step: state.cateringReducer.step,
        visibleCatering: state.toggleReducer.visibleCatering,
        cateringData: state.cateringReducer.cateringData
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        nextStep, previousStep, toggleCateringModal
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CateringContainer));

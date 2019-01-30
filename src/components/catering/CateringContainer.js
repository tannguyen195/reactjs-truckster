import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Catering from './Catering'
import _catering from './_catering.less'
import { Form } from 'antd'
import { toggleCateringModal } from '../../actions/toggleAction'
import { nextStep, previousStep } from '../../actions/cateringAction'
import { catering } from '../../api/cateringApi'
import moment from 'moment'

class CateringContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            occasion: "",

        }
    }
    handleSubmitForm = () => {
     

        const { cateringData, catering, food_truck_id, form } = this.props

        form.validateFieldsAndScroll((err, values) => {
            catering({
                ...cateringData,
                city: cateringData.city[0] + "-" + cateringData.city[1],
                start_time: moment(cateringData.eventDate, 'YYYY-MM-DD').format('YYYY-MM-DD') + ` ` + moment(cateringData.start_time, 'HH:mm:s').format('HH:mm'),
                end_time: moment(cateringData.eventDate).format('YYYY-MM-DD') + ` ` + moment(cateringData.end_time, 'HH:mm:s').format('HH:mm'),
                food_truck_id,
                comment: values.comment
            })

        });


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
        nextStep, previousStep, toggleCateringModal, catering
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(CateringContainer));

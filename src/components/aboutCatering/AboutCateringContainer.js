import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Head from '../head'
import AboutCatering from './AboutCatering'

import _aboutCatering from './_aboutCatering.less'
import { getRecommenedTruck } from '../../api/truckApi'

import _catering from '../catering/_catering.less'
import { Form } from 'antd'
import { toggleCateringModal } from '../../actions/toggleAction'
import { nextStep, previousStep } from '../../actions/cateringAction'
import { catering } from '../../api/cateringApi'
import moment from 'moment'
const cateringImage1 = '/static/images/catering-1.jpg'
class AboutCateringContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true,
            occasion: "",
            cuisine: []
        }
    }

    componentDidMount() {
        const { getRecommenedTruck } = this.props
        getRecommenedTruck()
    }
    handleAddCuisine = (e) => {
        const { cuisine } = this.state

        let temp = cuisine
        if (cuisine.includes(e.id)) {
            temp.splice(cuisine.indexOf(e.id), 1)
            this.setState({
                cuisine: temp
            })
        }
        else
            this.setState({
                cuisine: cuisine.concat(e.id)
            })

    }
    handleSubmitForm = () => {
        const { cateringData, catering, food_truck_id, form } = this.props

        form.validateFieldsAndScroll((err, values) => {
            catering({
                ...cateringData,
                city: cateringData.city[0] + "-" + cateringData.city[1],
                start_time: moment(cateringData.eventDate, 'YYYY-MM-DD').format('YYYY-MM-DD') + ` ` + moment(cateringData.start_time, 'HH:mm:s').format('HH:mm:s'),
                end_time: moment(cateringData.eventDate).format('YYYY-MM-DD') + ` ` + moment(cateringData.end_time, 'HH:mm:s').format('HH:mm:s'),
                cuisine: this.state.cuisine.toString(),
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
    onPreviousStep = () => {
        this.props.previousStep()
    }
    handleSubmit = (e) => {
        const {
            form, nextStep
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
                    __html: _aboutCatering + _catering
                }} />
                <Head
                    ogImage={cateringImage1}
                    url="https://gotruckster.com/catering"
                    title="Food Truck Catering - Great for Weddings, Birthday Parties & More"
                    description="Book a food truck here for next special event! Search by cuisine type, choose from a large list of trucks & submit a catering request."
                />
                <AboutCatering
                    handleSubmit={this.handleSubmit}
                    handleSubmitForm={this.handleSubmitForm}
                    onOccasionChange={this.onOccasionChange}
                    onPreviousStep={this.onPreviousStep}
                    handleAddCuisine={this.handleAddCuisine}
                    {...this.state}
                    {...this.props}

                />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        recommendTruck: state.truckReducer.recommendTruck,
        step: state.cateringReducer.step,
        visibleCatering: state.toggleReducer.visibleCatering,
        cateringData: state.cateringReducer.cateringData,
        cuisineList: state.truckReducer.cuisineList
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getRecommenedTruck,
        nextStep, previousStep, toggleCateringModal, catering
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(AboutCateringContainer));

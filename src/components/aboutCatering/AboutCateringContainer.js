import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Head from '../head'
import AboutCatering from './AboutCatering'

import _aboutCatering from './_aboutCatering.less'
const cateringImage1 = '/static/images/catering-1.jpg'
class AboutCateringContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true
        }
    }

    
    render() {

        return (
            <div>
                <style dangerouslySetInnerHTML={{
                    __html: _aboutCatering
                }} />
                <Head
                    ogImage={cateringImage1}
                    url="https://gotruckster.com/catering"
                    title="Food Truck Catering"
                    description="There are so many different kinds of food trucks out there,
                    how to begin? Truckster makes it easy."
                />
                <AboutCatering
                    {...this.state}
                    {...this.props}
                   
                />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AboutCateringContainer);

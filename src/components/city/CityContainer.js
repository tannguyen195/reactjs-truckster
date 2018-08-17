import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import City from './City'

import _city from './_city.less'

import _cityCard from '../common/cityCard/_cityCard.less'

class CityContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true
        }
    }

    render() {

        return (
            <div className="gray-background">

                <style dangerouslySetInnerHTML={{
                    __html: _cityCard + _city
                }} />
                <City
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
export default connect(mapStateToProps, mapDispatchToProps)(CityContainer);

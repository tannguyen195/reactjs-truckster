import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import City from './City'

class CityContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true
        }
    }
  
    render() {

        return (      
                <City
                    {...this.state}
                    {...this.props}
                  
                />
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

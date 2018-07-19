import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Category from './Category'
import Fade from 'react-reveal/Fade';

class CategoryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true
        }
    }
    componentWillMount() {
        
        sessionStorage.setItem("reloadUrl", window.location.href)
    }
  
    render() {

        return (
            <Fade>
                <Category
                    {...this.state}
                    {...this.props}
                  
                />
            </Fade>
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
export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Category from './Category'
import Head from '../head'
class CategoryContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasMore: true
        }
    }

    render() {

        return (
            <div>
                <Head
                    url="https://gotruckster.com/"
                    title={"Search Denver Food Trucks By Cuisine – Truckster"}
                    description={"Satisfying your growling stomach is easy with our cuisine search tool. View Denver food trucks by cuisine type now!"}
                    ogImage={"https://www.langan.com/wp-content/uploads/2017/08/Denver.jpg"}
                >
                    <link rel="canonical" href="https://gotruckster.com/food-truck/co/denver" />
                </Head>
                <Category
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
export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);

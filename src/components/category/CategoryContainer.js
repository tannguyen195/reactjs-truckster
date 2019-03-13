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
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const { cuisineList } = this.props
        return (
            <div style={{ background: "#fafafa" }}>
                <Head
                    url="https://gotruckster.com/food-truck/co/denver/cuisines"
                    title={"Search Denver Food Trucks By Cuisine – Truckster"}
                    description={"Satisfying your growling stomach is easy with our cuisine search tool. View Denver food trucks by cuisine type now!"}
                    ogImage={"https://www.langan.com/wp-content/uploads/2017/08/Denver.jpg"}
                >
                    <meta name="robots" content="noindex"></meta>
                    <link rel="canonical" href="https://gotruckster.com/food-truck/co/denver" />
                </Head>
                {
                    cuisineList && <Category
                        {...this.state}
                        {...this.props}

                    />
                }

            </div>
        )
    }
}
export function mapStateToProps(state) {
    return {
        cuisineList: state.truckReducer.cuisineList
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);

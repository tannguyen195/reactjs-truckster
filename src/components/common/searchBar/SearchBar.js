import React, { Component } from 'react'
import { AutoComplete, Input, Select, Icon } from 'antd'
import { getSearchResult } from '../../../actions/truckAction'
import { Link } from 'routes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Router } from 'routes'
const targetIcon = ("/static/images/target-icon.png")
const drinkIconGrey = ("/static/images/drink-icon-grey.svg")
const foodIconGrey = ("/static/images/food-icon-grey.svg")
const arrowRightIcon = ("/static/images/arrow-right-icon.png")
const Option = Select.Option;

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: [],
        }
    }

    renderOption(item, index) {

        let link = "",
            icon = null
        switch (item.type) {
            case "cuisine": {
                link = `/cuisine/${item.name.toLowerCase()}`;
                icon = foodIconGrey;
                break;
            }
            case "truck": {
                link = `/food-truck/${item.slug}`;
                icon = targetIcon;
                break;
            }
            case "brewery": {
                link = `/brewery/${item.slug}`;
                icon = drinkIconGrey;
                break;
            }
            default: break;
        }
        return (
            <Option className="option-container" key={item.name} text={item.name}>
                <Link to={link} >
                    <div className="search-container ">
                        <div className="left">
                            <img alt="icon-type" src={icon} />
                            <span className="Body-2LeftBlack">
                                {item.name}
                            </span>
                        </div>
                        <div className="right">
                            <img alt="right" src={arrowRightIcon} />
                        </div>
                    </div>
                </Link>
            </Option>

        )
    }

    handleSearch(value) {
        this.setState({
            value: value
        })
    }

    onSelect(value, e) {
        Router.pushRoute(e.props.children.props.to)
    }
    onEnter() {
        Router.pushRoute('/search')
    }
    render() {

        const { isHeader, searchValue, onSearchValueChange, result } = this.props
        return (
            <div className="searchbar-container">
                {
                    isHeader && <Icon type="search" />
                }

                <AutoComplete
                    allowClear={true}
                    defaultActiveFirstOption={false}
                    placeholder="Find Cuisine Types, Food Trucks and Breweries"
                    optionLabelProp="value"
                    className="certain-category-search"
                    dropdownClassName="certain-category-search-dropdown"
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={result ? result.map(this.renderOption) : []}

                    onSelect={(value, e) => this.onSelect(value, e)}
                    onSearch={(e) => this.handleSearch(e)}

                    onChange={onSearchValueChange}
                    value={searchValue}
                >
                    <Input

                        onChange={onSearchValueChange}
                        value={searchValue}
                        onPressEnter={() => this.onEnter()}
                        suffix={isHeader ? null : <Icon type="search" />} />
                </AutoComplete>

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
        getSearchResult
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
import React, { Component } from 'react'
import { AutoComplete, Input, Select, Icon } from 'antd'
import { Link } from 'routes'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Router } from 'routes'
const truckGrayIcon = ("/static/images/truck-gray.svg")
const breweryGrayIcon = ("/static/images/brewery-gray.svg")
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
    renderSearchResult() {
        const {
            searchResult, isLoadingSearch
        } = this.props
        if (searchResult) {
            if (isLoadingSearch)
                return [].concat(
                    <Option className="loading-search " key="loading">
                        <div className="text-loading "> FINDING RESULT <Icon type="loading" /> </div>
                    </Option>

                )
            else return searchResult.map(this.renderOption)
        }
        else return []
    }
    renderOption(item, index) {

        let link = "",
            icon = null
        switch (item.type) {
            case "cuisine": {
                link = `/food-truck/co/denver/${item.name.toLowerCase()}`;
                icon = foodIconGrey;
                break;
            }
            case "truck": {
                link = `/food-truck/${item.slug}`;
                icon = truckGrayIcon;
                break;
            }
            case "brewery": {
                link = `/brewery/${item.slug}`;
                icon = breweryGrayIcon;
                break;
            }
            default: break;
        }
        return (
            <Option className="option-container" key={item.name} text={item.name}>
                <Link prefetch to={link} >
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
        if (e.key !== "loading")
            Router.pushRoute(e.props.children.props.to)
    }
    onEnter() {
        Router.pushRoute('/search')
    }
    render() {

        const { isHeader, searchValue, onSearchValueChange, result, searchResult } = this.props
        return (
            <div className="searchbar-container">
                {
                    isHeader && <Icon type="search" />
                }

                <AutoComplete

                    defaultActiveFirstOption={false}
                    placeholder="Find Cuisine Types, Food Trucks and Breweries"
                    optionLabelProp="value"
                    className="certain-category-search"
                    dropdownClassName="certain-category-search-dropdown"
                    size="large"
                    style={{ width: '100%' }}
                    dataSource={this.renderSearchResult()}
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
        searchResult: state.searchReducer.searchResult,
        isLoadingSearch: state.searchReducer.isLoadingSearch,
        param: state.searchReducer.param
    };
}

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
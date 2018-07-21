import React, { Component } from 'react'
import { AutoComplete, Input, Select, Icon } from 'antd'
import { getSearchResult } from '../../../actions/truckAction'
import stylesheet from './_searchBar.less'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const targetIcon = require("/static/images/target-icon.png")
const drinkIconGrey = require("/static/images/drink-icon-grey.svg")
const foodIconGrey = require("/static/images/food-icon-grey.svg")
const arrowRightIcon = require("/static/images/arrow-right-icon.png")
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
                link = `/cuisine/${item.name}`;
                icon = foodIconGrey;
                break;
            }
            case "truck": {
                link = `/food-truck/${item.name.toLowerCase().replace(/ /g, "-")}--${item.id}`;
                link = `/food-truck/${item.name.toLowerCase().replace(/ - /g, "")}--${item.id}`;
                icon = targetIcon;
                break;
            }
            case "brewery": {

                link = `/brewery/${item.name.toLowerCase().replace(/ /g, "-")}--${item.id}`;
                link = `/brewery/${item.name.toLowerCase().replace(/ - /g, "")}--${item.id}`;
                icon = drinkIconGrey;
                break;
            }
            default: break;
        }
        return (
            <Option className="option-container" key={item.name} text={item.name}>
                <div to={link} >
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
                </div>
            </Option>

        )
    }

    handleSearch(value) {
        this.setState({
            value: value
        })
    }

    onSelect(value, e) {
        this.props.history.push(e.props.children.props.to)
    }
    onEnter() {
        this.props.history.push("/search/")
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
                    placeholder="Find cuisine, food truck and brewery"
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
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
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
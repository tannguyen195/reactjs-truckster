import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './_placeholder.less'
import Placeholder from '../placeholder/Placeholder'
class LoadingPlaceholder extends Component {
    renderPlaceHolder(itemNum) {
        var indent = []
        for (var i = 0; i < itemNum; ++i) {
            indent.push(<Col key={i} style={{ marginBottom: "16px" }} sm={12} xs={24} md={itemNum < 6 ? 24 / itemNum : 8} lg={itemNum < 6 ? 24 / itemNum : 8}>
                <Placeholder />
            </Col>)
        }
        return indent
    }
    render() {
        const { itemNum } = this.props
        return (
            <Row gutter={16}>
                {
                    this.renderPlaceHolder(itemNum || 6)

                }
            </Row>

        )
    }
}

export default LoadingPlaceholder

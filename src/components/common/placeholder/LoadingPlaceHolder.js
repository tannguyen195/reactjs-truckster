import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Placeholder from '../placeholder/Placeholder'
class LoadingPlaceholder extends Component {
    renderPlaceHolder(itemNum) {
        var indent = [], lg = 6, md = 8
        switch (itemNum) {
            case 8:
                lg = 6
                md = 8
                break;
            case 6:
                lg = 8
                md = 8
                break;
            case 3:
                lg = 8
                md = 12
                break;
            case 2:
                lg = 12
                md = 12

                break;
            default: break;

        }
        for (var i = 0; i < itemNum; ++i) {
            indent.push(<Col key={i} style={{ marginBottom: "16px" }} sm={12} xs={24} md={md} lg={lg}>
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

import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './_placeholder.less'
import Placeholder from '../placeholder/Placeholder'
class LoadingPlaceholder extends Component {
    render() {
        return (
            <Row gutter={16}>
                <Col style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                    <Placeholder />
                </Col>
                <Col style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                    <Placeholder />
                </Col>
                <Col style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                    <Placeholder />
                </Col>
                <Col style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                    <Placeholder />
                </Col>
                <Col style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                    <Placeholder />
                </Col>
                <Col style={{ marginBottom: "16px" }} sm={12} xs={24} md={8} lg={8}>
                    <Placeholder />
                </Col>
            </Row>

        )
    }
}

export default LoadingPlaceholder
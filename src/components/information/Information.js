import React, { Component } from 'react';

import { Row, Col, } from 'antd';
import { Link } from "routes"

export default class Information extends Component {
    renderBlog(renderPage) {
        return renderPage.map((item, index) => {
            return <div>
                <Link to={"/info/" + item.slug}>
                    <a>
                        <h2 className="article-title Display-2BlackLeft" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                    </a>
                </Link>

                <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
            </div>
        })
    }
    render() {
        const { parsedInfoPage, renderPage } = this.props
        return (
            <article className="info-wrapper">
                <div className="Body-1SemiBlackLeft"> POST</div>
                <Row gutter={64} type="flex" align="top">
                    <Col lg={16} >
                        {
                            this.renderBlog(renderPage)
                        }
                    </Col>

                    <Col className="recent-post-container" lg={8}>
                        <div className="Body-1SemiBlackLeft">Recent Posts</div>
                        <ul className="post-list">
                            {
                                parsedInfoPage.data.map((item, index) => {
                                    return <li key={index} className="post-item">
                                        <Link to={"/info/" + item.slug}>
                                            <a>{item.title.rendered}</a>
                                        </Link>

                                    </li>
                                })
                            }

                        </ul>
                    </Col>
                </Row>
            </article >
        )
    }
}

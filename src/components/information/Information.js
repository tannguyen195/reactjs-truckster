import React, { Component } from 'react';
import stylesheet from './_information.less'
import { Row, Col, } from 'antd';
import { Link } from "routes"

export default class Information extends Component {
    render() {
        const { parsedInfoPage, renderPage } = this.props
        return (
            <article className="info-wrapper">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }}></style>
                <Row gutter={64}>
                    <Col lg={16} >
                        <div className="Body-1SemiBlackLeft">POSTS</div>
                        <div className="article-title Display-2BlackLeft" dangerouslySetInnerHTML={{ __html: renderPage.title.rendered }} />
                        <div dangerouslySetInnerHTML={{ __html: renderPage.content.rendered }} />



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

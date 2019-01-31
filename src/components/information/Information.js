import React, { Component } from 'react';

import { Row, Col, } from 'antd';
import { Link } from "routes"

export default class Information extends Component {
    renderBlog(renderPage) {
        const { query } = this.props
        return renderPage.map((item, index) => {
            return <div key={index}>
                <Link prefetch to={"/info/" + item.slug}>
                    <a>
                        <h1 className="article-title Display-2BlackLeft" dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                    </a>
                </Link>
                {
                    query && query.slug ?
                        <div>
                            <div className="blog-content" dangerouslySetInnerHTML={{ __html: item.content.rendered }} />

                          
                        </div>
                        : <div>
                            <div dangerouslySetInnerHTML={{ __html: item.content.rendered.slice(0, item.content.rendered.indexOf(".</p>", 1)) }} />
                            <Link prefetch to={"/info/" + item.slug}>
                                <a> Continue reading</a>
                            </Link>
                        </div>

                }

            </div>
        })
    }
    render() {
        const { parsedInfoPage, renderPage } = this.props

        return (
            <article className="info-wrapper media">
                <div className="Body-1SemiBlackLeft"> POST</div>
                <Row gutter={64} type="flex" align="top">
                    <Col className="blog-content" lg={16} >
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
                                        <Link prefetch to={"/info/" + item.slug}>
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

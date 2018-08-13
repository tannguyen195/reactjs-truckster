import React, { Component } from 'react';
import stylesheet from './_section.less'
import { Link } from 'routes'
import { Icon } from 'antd'
class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {

        const { children, title, url } = this.props

        return (
            <section className="section-block-main">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div className="header">

                    <Link to={url} >

                        <a className="section-title">
                            <div className="Display-2BlackLeft">
                                {title}
                            </div>
                            <div className="ButtonBlackCenter">
                                <Icon className="icon-right" type="right" />
                            </div>

                            <div className="see-all ButtonRedCenter">
                                Explore all
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="content">
                    {children}
                </div>

            </section >
        )
    }
}

export default Section;

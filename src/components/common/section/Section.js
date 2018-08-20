import React, { Component } from 'react';
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
                <div className="header">
                    <Link to={url} >
                        <a className="section-title">
                            <h3 className="Display-2BlackLeft">
                                {title}
                            </h3>
                        </a>
                    </Link>
                </div>

                <div className="content">
                    {children}
                </div>
                {
                    url && <div className="see-all">
                        <Link to={url} >
                            <a className="ButtonRedCenter">
                                EXPLORE ALL   </a>
                        </Link>
                    </div >
                }



            </section >
        )
    }
}

export default Section;

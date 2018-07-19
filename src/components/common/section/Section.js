import React, { Component } from 'react';
import './_section.less'
import { Link } from 'react-router-dom'


class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {

        const { children, title, seeall, url } = this.props

        return (
            <section>
                <div className="header">
                    <div className="section-title Display-2BlackLeft">
                        {title}
                    </div>
                    {
                        url && seeall && <div to={url} className="see-all ButtonRedCenter">
                            SEE ALL
                    </div>
                    }

                </div>

                <div className="content">
                    {children}
                </div>

            </section >
        )
    }
}

export default Section;

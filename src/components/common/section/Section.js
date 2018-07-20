import React, { Component } from 'react';
import stylesheet from './_section.less'
import { Link } from 'routes'


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
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div className="header">
                    <div className="section-title Display-2BlackLeft">
                        {title}
                    </div>
                    {
                        url && seeall && <Link to={url} >
                            <a className="see-all ButtonRedCenter">
                                SEE ALL
                    </a>
                        </Link>
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

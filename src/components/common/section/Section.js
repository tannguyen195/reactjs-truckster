import React, { Component } from 'react';
import { Link } from 'routes'
import { Button } from 'antd'
class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }
 
    render() {

        const { children, title, url, type } = this.props

        return (
            <section className="section-block-main">
                <div className="header">

                    <h2 className="Display-2BlackLeft">
                        {title}
                    </h2>

                </div>

                <div className="content">
                    {children}
                </div>
                {
                    url && <div className="see-all">
                        <Link prefetch to={url} >
                            <a className="ButtonRedCenter">
                                <Button className="ButtonBlackCenter" >
                                    MORE {`${type}`}
                                </Button>
                            </a>
                        </Link>
                    </div >
                }



            </section >
        )
    }
}

export default Section;

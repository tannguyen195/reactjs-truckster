import React, { Component } from 'react'
import { Card } from 'antd'
import stylesheet from  './_placeholder.less'

class Placeholder extends Component {

    render() {
      

        return (
            <div className="timeline-wrapper">
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <Card hoverable>
                    <div className="timeline-item">
                        <div className="animated-background">
                        </div>
                        <div className="animated-background">
                            <div className="background-masker content-top"></div>
                            <div className="background-masker content-first-end"></div>
                            <div className="background-masker content-second-line"></div>
                            <div className="background-masker content-second-end"></div>
                            <div className="background-masker content-third-line"></div>
                            <div className="background-masker content-third-end"></div>
                        </div>
                    </div>
                </Card>
            </div>

        )
    }
}

export default Placeholder
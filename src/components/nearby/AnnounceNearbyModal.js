import React, { Component } from 'react';

import { Modal, Button } from 'antd'
const logo = ("/static/images/logo-vertical.png")
class AnnounceModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {

        const { handleCancel, visible, handleExploreInRightPosition } = this.props

        return (
            <Modal
                title=""
                footer={null}
                visible={visible}
                onCancel={handleCancel}
            >

                <div className="announce-modal-container">
                    <div className='logo-container'><img alt='logo' src={logo} /></div>
                    <div className='Regular-24px-Style message'>
                        {`We detected that your current location is not in Colorado, and we are currently only serving in Colorado only, more cities are coming soon.`}</div>
                    <div className="explore-button">
                        <Button onClick={() => handleExploreInRightPosition()} type="primary"> EXPLORE IN DENVER </Button>
                    </div>
                </div>

            </Modal>

        )
    }
}

export default AnnounceModal;

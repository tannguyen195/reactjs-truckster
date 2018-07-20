import React, { Component } from 'react';
import stylesheet from './_announceModal.less'
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
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div className="announce-modal-container">
                    <div className='logo-container'><img alt='logo' src={logo} /></div>
                    <div className='Regular-24px-Style message'>
                        {`We detected that your current location is not in Denver, and we are currently only serving in Denver only, more cities are coming soon.`}</div>
                    <div className="explore-button">
                        <Button onClick={() => handleExploreInRightPosition()} type="primary"> EXPLORE IN DENVER </Button>
                    </div>
                </div>

            </Modal>

        )
    }
}

export default AnnounceModal;

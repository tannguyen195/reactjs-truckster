import React, { Component } from 'react';
import { Modal } from 'antd'
const logo = ("/static/images/logo-vertical.png")
class AnnounceModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {

        const { handleCancel, visible } = this.props

        return (
            <Modal
                title=""
                footer={null}
                visible={visible}
                onCancel={handleCancel}
            ><div className="announce-modal-container">
    
                    <div className='logo-container'><img alt='logo' src={logo} /></div>
                    <div className='Regular-24px-Style message'>
                        {`Thanks for your interest! 
                    This will be available soon!`}</div>
                </div>
            </Modal>

        )
    }
}

export default AnnounceModal;

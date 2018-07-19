import React, { Component } from 'react';
import { Icon, Modal } from 'antd'
import './_errorModal.less'



class ErrorModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {

        const { openError, toggleErrorModal, statusText } = this.props
  
        return (
            <Modal
                maskClosable={false}
                title=""
                visible={openError}
                onCancel={toggleErrorModal}
                footer={null}
            >
                <div className="message-modal">
                    <div className="image-container">
                        <Icon type="close-circle" style={{ color: '#f04134', fontSize: "50px" }} />
                    </div>
                    <div className="message-container">
                        <div>
                            <p>{statusText && statusText}</p>
                            <p>	</p>
                        </div>

                    </div>
                </div>
            </Modal>
        )
    }
}

export default ErrorModal;

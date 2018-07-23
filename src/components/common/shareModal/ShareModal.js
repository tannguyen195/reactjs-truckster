import React, { Component } from 'react';
import stylesheet from './_shareModal.less'
import { Modal } from 'antd'
import {
    FacebookShareButton,

    FacebookIcon,

} from 'react-share';
const logo = ("/static/images/logo-vertical.png")
class ShareModal extends Component {
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
            >
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div className="share-modal-container">
                    <div className='logo-container'><img alt='logo' src={logo} /></div>
                    <FacebookShareButton className="social-button-container"  >
                        <FacebookIcon TwitterIcon size={32} round={true} />
                        <div className="title Body-1MediumBlackCenter">
                            Post to Facebook
                        </div>
                    </FacebookShareButton>
                </div>
            </Modal>

        )
    }
}

export default ShareModal;

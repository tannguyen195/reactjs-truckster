import React, { Component } from 'react';
import stylesheet from './_shareModal.less'
import { Modal } from 'antd'
import {
    FacebookShareButton,

    FacebookIcon,

} from 'react-share';
import { Router } from 'routes'
const logo = ("/static/images/logo-vertical.png")
class ShareModal extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        const { handleCancel, visible } = this.props
        let url = ""
        if (Router && Router.router && Router.router.asPath)
            url = Router.router.asPath
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
                    <FacebookShareButton url={"https://gotruckster.com/" + url} className="social-button-container"  >
                        <FacebookIcon size={32} round={true} />
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

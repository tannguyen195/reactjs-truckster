import React from 'react'
import { Form, Input, Button, Row, Col, Modal } from 'antd';

import stylesheet from './_forgot.less'
const FormItem = Form.Item
const backIcon = ('/static/images/back-icon.png')
const mailIcon = ('/static/images/mail-icon.png')

class ForgotModal extends React.Component {


    render() {
        const {
            toggleSignInModal,
            toggleForgotModal,
            visibleForgot,

        } = this.props

        const { getFieldDecorator } = this.props.form

        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <Modal

                    width={540}
                    closable={false}
                    visible={visibleForgot}
                    title='' footer={null}
                    onCancel={toggleForgotModal}
                    className="modal-body"
                >

                    <div className="forgot-title Display-2BlackCenter">Forgot your password?</div>
                    <div className="bref Body1RegularGrayLeft">Enter the email address associated with your account, and we’ll email you a link to reset your password.</div>
                    <div style={{ marginTop: 0 }} className="form-login">
                        <FormItem style={{ marginBottom: '24px' }}>
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: `It not a valid email address`,
                                }, {
                                    required: true, message: `Please enter your email`,
                                }],
                            })(
                                <Input
                                    suffix={<img
                                        className="img-icon"
                                        alt="email"
                                        src={mailIcon} />} placeholder="Email Address" />
                            )}
                        </FormItem>
                    </div>
                    <Row type="flex" justify="space-between">
                        <Col span={10} className="back-container">
                            <img alt="back" src={backIcon} />
                            <span className="ButtonGreyLeft" onClick={toggleSignInModal}>BACK TO LOGIN</span>
                        </Col>
                        <Col span={10}>   <div className="button-container email">
                            <Button type="primary">
                                <div className="ButtonWhiteCenter"> RESET PASSWORD</div></Button></div></Col>
                    </Row>
                </Modal>
            </div>

        )
    }
}

export default ForgotModal
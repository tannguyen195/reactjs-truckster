import React from 'react'
import { Form, Input, Button, Modal, Popover } from 'antd';

const FormItem = Form.Item
const userIcon = ('/static/images/user-icon.png')
const mailIcon = ('/static/images/mail-icon.png')
const lockIcon = ('/static/images/lock-icon.png')
const phoneIcon = ('/static/images/phone-icon.png')

const popOver = (messageArray) => {
    return messageArray.map((item, index) => {
        return <div key={index}>{item}</div>
    })
}
class SignUpModal extends React.Component {


    render() {
        const {
            toggleSignInModal,
            toggleSignUpModal,
            visibleSignUp,
            checkPassword,
            handleSignUp,
            messageSignUp, statusSignUp,
            visibleErrorSignUpPopOver,
            isLoadingSignUp
        } = this.props

        const { getFieldDecorator } = this.props.form

        return (
            <div>

                <Modal
                    width={540}
                    visible={visibleSignUp}
                    title='' footer={null}
                    onCancel={toggleSignUpModal}
                    className="modal-body"
                >
                    <div className="sign-up-with" style={{ marginBottom: '15px' }}>Sign up with <a>Facebook
                </a>  or <a>Google
                    </a> </div>
                    <div className="divider">
                        <p>or
                </p></div>
                    <div className="form-login">
                        <FormItem style={{ marginBottom: '24px' }}>
                            {getFieldDecorator('name', {
                                rules: [{
                                    required: true, message: `Please enter your name`,
                                }],
                            })(
                                <Input
                                    suffix={<img
                                        className="img-icon"
                                        alt="email"
                                        src={userIcon} />} placeholder="User Name" />
                            )}
                        </FormItem>
                        <Popover
                            placement="right"
                            content={messageSignUp && popOver(messageSignUp)}
                            visible={statusSignUp === 404 && messageSignUp && visibleErrorSignUpPopOver}
                        >
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
                        </Popover>
                        <FormItem style={{ marginBottom: '24px' }}>
                            {getFieldDecorator('phone', {
                                rules: [{
                                    required: true, message: `Please enter your phone number`,
                                    pattern: "[0-9]"
                                }],
                            })(
                                <Input
                                    suffix={<img
                                        className="img-icon"
                                        alt="phone"
                                        src={phoneIcon} />} placeholder="Phone number" />
                            )}
                        </FormItem>
                        {/* <FormItem style={{ marginBottom: '24px' }}>
                        {getFieldDecorator('birthday', {
                            rules: [{
                                required: true, message: `Please enter your birthday`,
                            }],
                        })(
                            <DatePicker />
                        )}
                    </FormItem> */}
                        <Popover
                            placement="right"
                            content={messageSignUp && popOver(messageSignUp)}
                            visible={statusSignUp === 422 && messageSignUp && visibleErrorSignUpPopOver}
                        >
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: `Please enter your password` }],
                                })(
                                    <Input onPressEnter={(e) => handleSignUp(e)}
                                        suffix={
                                            <img
                                                className="img-icon"
                                                alt="password"
                                                src={lockIcon} />}
                                        type="password" placeholder="Password" />
                                )}
                            </FormItem>
                        </Popover>
                        <FormItem>
                            {getFieldDecorator('c_password', {
                                rules: [
                                    {
                                        required: true, message: `Please confirm your password`
                                    },
                                    {
                                        validator: (rule, value, callback) => checkPassword(rule, value, callback),
                                    }
                                ],
                            })(
                                <Input onPressEnter={(e) => handleSignUp(e)}
                                    suffix={
                                        <img
                                            className="img-icon"
                                            alt="password"
                                            src={lockIcon} />}
                                    type="password" placeholder="Confirm Password" />
                            )}
                        </FormItem>
                        <div className="secondary-color Body-1RegularGrayLeft" style={{ marginBottom: "15px" }}>
                            By using Truckster you agree to the <a>Terms of Service</a>, <a>Privacy Policy</a> and<a> Cookie Policy</a>.

                    </div>
                        <FormItem>

                            <div className="button-container email">
                                <Button loading={isLoadingSignUp} type="primary"
                                    onClick={(e) => handleSignUp(e)}>
                                    <span className="ButtonWhiteCenter">
                                        CREATE A ACCOUNT
                                </span>
                                </Button></div>

                        </FormItem>
                        {<p className="alert-message"></p>}
                    </div>


                    <div className="divider"></div>
                    <div className="text-highlight secondary-color ">
                        Already have an account?
                    <a onClick={toggleSignInModal}> Login</a>
                    </div>
                </Modal>
            </div>

        )
    }
}

export default SignUpModal
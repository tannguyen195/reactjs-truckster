import React from 'react'
import { Form, Input, Button, Modal, Popover } from 'antd';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import { googleClientID, facebookAppID } from 'config'
const FormItem = Form.Item
const mailIcon = ('/static/images/mail-icon.png')
const lockIcon = ('/static/images/lock-icon.png')
const facebookIcon = ('/static/images/facebook-icon.svg')
const googleIcon = ('/static/images/google-icon.svg')

const popOver = (messageArray) => {
    return messageArray.map((item, index) => {
        return <div key={index}>{item}</div>
    })
}

class SignInModal extends React.Component {

    render() {
        const {
            toggleSignInModal,
            toggleSignUpModal,
            toggleForgotModal,
            visibleSignIn,
            onLoginEmailChange,
            isLoginEmail,
            handleSignInEmail,
            isLoadingSignIn,
            messageSignIn,
            statusSignIn,
            visibleErrorSignInPopOver,
            handleLoginSocial
        } = this.props

        const { getFieldDecorator } = this.props.form

        return (
            <div>


                <Modal
                    width={540}

                    visible={visibleSignIn}
                    title='' footer={null}
                    onCancel={toggleSignInModal}
                    className="modal-body"
                >

                    <div className='social-login '>
                        <div className="button-container ButtonBlackCenter">
                            <img alt="facebook" src={facebookIcon} />
                            <div className="social-container">
                                <FacebookLogin
                                    cssClass="facebook-login-button"
                                    appId={facebookAppID}
                                    //autoload
                                    isMobile={false}
                                    autoLoad={false}
                                    fields="email"

                                    callback={(response) => {

                                        handleLoginSocial({
                                            token: response.accessToken,
                                            provider: "facebook"
                                        })
                                    }} >

                                </FacebookLogin>
                            </div>

                        </div>
                        <div className="button-container ButtonBlackCenter">
                            <img className="facebook" alt="facebook" src={googleIcon} />
                            <div className="social-container">
                                <GoogleLogin
                                    icon="fa-google"
                                    className="google-login-button"
                                    clientId={googleClientID}
                                    buttonText="LOGIN WITH GOOGLE"
                                    onSuccess={response => {

                                        handleLoginSocial({
                                            token: response.accessToken,
                                            provider: "google"
                                        })
                                    }}
                                    onFailure={(response) => console.log(response)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="divider">
                        <p>or
                </p></div>
                    {
                        isLoginEmail ?
                            <div className="form-login">
                                <Popover
                                    placement="right"
                                    content={messageSignIn && popOver(messageSignIn)}
                                    visible={statusSignIn === 404 && messageSignIn && visibleErrorSignInPopOver}
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
                                <Popover
                                    placement="right"
                                    content={messageSignIn && popOver(messageSignIn)}
                                    visible={statusSignIn === 422 && messageSignIn && visibleErrorSignInPopOver}
                                >
                                    <FormItem>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: `Please enter your password` }],

                                        })(
                                            <Input onPressEnter={handleSignInEmail}
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


                                    <div className="button-container email ButtonWhiteCenter">
                                        <Button loading={isLoadingSignIn} type="primary"
                                            onClick={handleSignInEmail}>
                                            <span className="ButtonWhiteCenter">
                                                LOGIN
                                        </span>
                                        </Button></div>

                                </FormItem>
                                <a className="login-form-forgot"
                                    onClick={toggleForgotModal}>Forgot password ?</a>
                                {<p className="alert-message"></p>}
                            </div> :
                            <div className="form-login margin-bottom button-container email ">
                                <Button loading={isLoadingSignIn} type="primary" onClick={onLoginEmailChange}>
                                    <span className="ButtonWhiteCenter">
                                        LOGIN BY EMAIL
                            </span>
                                </Button>
                            </div>
                    }

                    <div className="divider"></div>
                    <div className="text-highlight">
                        Don't have account?
                    <a onClick={toggleSignUpModal}> Sign Up</a>
                    </div>

                </Modal >
            </div>
        )
    }
}

export default SignInModal
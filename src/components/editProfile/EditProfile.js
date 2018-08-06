import React, { Component } from 'react';
import { Button, Tabs, Form, Input, Radio, DatePicker, } from 'antd';

import stylesheet from './_editProfile.less'
import Dropzone from 'react-dropzone'
const RadioGroup = Radio.Group;
const FormItem = Form.Item
const TabPane = Tabs.TabPane;


const unknownUserIcon = ('/static/images/unknown-user-icon.png')
const userIcon = ('/static/images/user-icon.png')
const lockIcon = ('/static/images/lock-icon.png')
const phoneIcon = ('/static/images/phone-icon.png')

class EditProfile extends Component {

    renderAccountSetting() {
        const { checkPassword, handleChangePassword, isLoadingChangePassword } = this.props
        const { getFieldDecorator } = this.props.form

        return <div className="max-width">
            <div className="edit-general">

                <div className="change-info">
                    <div className="form-login">
                        <div className="title-info LabelGreyLeft">Current Password</div>
                        <FormItem>
                            {getFieldDecorator('current_password', {
                                rules: [{ required: true, message: `Please enter your current password` }],
                            })(
                                <Input onPressEnter={handleChangePassword}
                                    suffix={
                                        <img
                                            className="img-icon"
                                            alt="password"
                                            src={lockIcon} />}
                                    type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <div className="title-info LabelGreyLeft">New Password</div>
                        <FormItem>
                            {getFieldDecorator('new_password', {
                                rules: [{ required: true, message: `Please enter your new password` }],
                            })(
                                <Input onPressEnter={handleChangePassword}
                                    suffix={
                                        <img
                                            className="img-icon"
                                            alt="password"
                                            src={lockIcon} />}
                                    type="password" placeholder="Password" />
                            )}
                        </FormItem>

                        <div className="title-info LabelGreyLeft">Confirm Password</div>
                        <FormItem>
                            {getFieldDecorator('confirm_password', {
                                rules: [{ required: true, message: `Please confirm your new password` }],
                            }, {
                                    validator: (rule, value, callback) => checkPassword(rule, value, callback),
                                })(
                                    <Input onPressEnter={handleChangePassword}
                                        suffix={
                                            <img
                                                className="img-icon"
                                                alt="password"
                                                src={lockIcon} />}
                                        type="password" placeholder="Password" />
                                )}
                        </FormItem>

                    </div>
                </div>
                <div className="save-button">
                    <Button loading={isLoadingChangePassword} onClick={handleChangePassword} type="primary">
                        <span className="ButtonWhiteCenter">
                            SAVE PASSWORD  </span>
                    </Button>
                </div>
            </div>
        </div>
    }
    renderGeneralSetting(userProfile) {
        const {
            userData,
            handleUpdateProfile,
            onNameChange,
            onGenderChange,
            onPhoneChange,
            onBirthdayChange, disabledDate,
            onAvatarChange,
            isLoadingUpdateProfile,
            preview
        } = this.props

        return <div className="max-width">
            <div className="edit-general">
                <div className="change-avatar">
                    {
                        preview ?
                            <img alt="avatar" src={preview} /> :
                            <img alt="avatar" src={userData && userData.avatar ? userData.avatar : unknownUserIcon} />
                    }

                    <div className="change-avatar-button">

                        <Dropzone className="container" onDrop={onAvatarChange}>
                            <Button>
                                <div className="ButtonBlackCenter">CHANGE AVATAR</div>
                            </Button>
                        </Dropzone>

                    </div>
                </div>
                <div className="change-info">
                    <div className="form-login">
                        <div className="title-info LabelGreyLeft">Full Name</div>
                        < FormItem style={{ marginBottom: '24px' }}>

                            <Input
                                onChange={onNameChange}
                                value={userProfile.name}
                                suffix={<img
                                    className="img-icon"
                                    alt="email"
                                    src={userIcon} />} placeholder="Name" />

                        </FormItem>

                        <div className="title-info LabelGreyLeft">Phone</div>
                        <FormItem style={{ marginBottom: '24px' }}>
                            <Input
                                onChange={onPhoneChange}
                                value={userProfile.phone}
                                suffix={<img
                                    className="img-icon"
                                    alt="email"
                                    src={phoneIcon} />} placeholder="Phone" />

                        </FormItem>
                        <div className="title-info LabelGreyLeft">Birthday</div>
                        <FormItem style={{ marginBottom: '24px' }}>

                            <DatePicker
                                showToday={false}
                                disabledDate={disabledDate}
                                mode="time"
                                value={userProfile.birthday}
                                onChange={onBirthdayChange} />

                        </FormItem>
                        <div className="title-info LabelGreyLeft">Gender</div>
                        <FormItem
                            style={{ marginBottom: '24px' }}
                        >

                            <RadioGroup onChange={onGenderChange} value={userProfile.gender}>
                                <Radio value={1}>Male</Radio>
                                <Radio value={0}>Female</Radio>
                            </RadioGroup>

                        </FormItem>
                    </div>
                </div>
                <div className="save-button">
                    <Button loading={isLoadingUpdateProfile} onClick={handleUpdateProfile} type="primary">
                        <span className="ButtonWhiteCenter">
                            SAVE PROFILE  </span>
                    </Button>
                </div>
            </div>
        </div >
    }
    render() {
        const { userProfile } = this.props

        return (

            <div className="edit-container">
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div className="edit-header">
                    <div className="title-edit DisplayBlackLeft">
                        Account Settings
                            </div>
                </div>

                <div className="edit-body">
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab="General" key="1">
                            {
                                userProfile &&
                                <div className="edit-content">
                                    {this.renderGeneralSetting(userProfile)}
                                </div>
                            }

                        </TabPane>
                        <TabPane tab="Account" key="2">
                            <div className="edit-content">

                                {this.renderAccountSetting()}

                            </div></TabPane>
                        <TabPane tab="Settings" key="3"><div className="edit-content">
                            <div className="edit-settings"></div>
                        </div></TabPane>
                    </Tabs>
                </div>
            </div>

        )


    }
}

export default EditProfile

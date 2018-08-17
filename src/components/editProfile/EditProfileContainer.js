import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form } from 'antd'
import { updateProfile, changePassword } from '../../api/profileApi'
import EditProfile from './EditProfile'
import moment from 'moment'
import _editProfile from './_editProfile.less'
class EditProfileContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            preview: "",
            userProfile: {

            }
        }
    }
    onAvatarChange(e) {

        this.setState({
            userProfile: {
                ...this.state.userProfile,
                avatar: e[0]
            },
            preview: e[0].preview
        })
    }
    onNameChange(e) {
        this.setState({
            userProfile: {
                ...this.state.userProfile,
                name: e.target.value,
            }
        })
    }
    onPhoneChange(e) {
        this.setState({
            userProfile: {
                ...this.state.userProfile,
                phone: e.target.value,
            }
        })
    }
    onGenderChange(e) {
        this.setState({
            userProfile: {
                ...this.state.userProfile,
                gender: e.target.value,
            }
        })
    }
    onBirthdayChange(date, dateString) {
        this.setState({
            userProfile: {
                ...this.state.userProfile,
                birthday: date,
            }
        })
    }
    handleChangePassword(e) {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.changePassword(values)
            }
        })
    }
    handleUpdateProfile() {
        this.props.updateProfile(
            {
                ...this.state.userProfile,
                birthday: moment(this.state.userProfile.birthday).format("YYYY/MM/DD")
            }
        )
    }
    disabledDate(current) {
        // Can not select days before today and today
        return current && current > moment().endOf('day');
    }

    componentWillMount() {

        sessionStorage.setItem("reloadUrl", window.location.href)
        if (this.props.userData)
            this.setState({
                userProfile: {
                    ...this.props.userData, birthday:
                        moment(this.props.userData.birthday),
                    avatar: null
                }
            })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userData && !nextProps.isLoadingUpdateProfile) {
            this.setState({
                userProfile: {
                    ...nextProps.userData, birthday:
                        moment(nextProps.userData.birthday),
                    avatar: null
                }
            })
        }
    }
    checkPassword(rule, value, callback) {

        const form = this.props.form
        if (value && value !== form.getFieldValue('new_password')) {
            let a = "Two passwords that you've entered are inconsistent"

            callback(a);
        } else {
            callback()
        }
    }
    render() {

        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: _editProfile }} />
                <EditProfile
                    onAvatarChange={(e) => this.onAvatarChange(e)}
                    handleChangePassword={(e) => this.handleChangePassword(e)}
                    checkPassword={(rule, value, callback) => this.checkPassword(rule, value, callback)}
                    disabledDate={(e) => this.disabledDate(e)}
                    onBirthdayChange={(date, dateString) => this.onBirthdayChange(date, dateString)}
                    onNameChange={(e) => this.onNameChange(e)}
                    onGenderChange={(e) => this.onGenderChange(e)}
                    onPhoneChange={(e) => this.onPhoneChange(e)}
                    handleUpdateProfile={(e) => this.handleUpdateProfile(e)}
                    {...this.state}
                    {...this.props} />
            </div>

        )
    }
}
export function mapStateToProps(state) {
    return {
        userData: state.profileReducer.userData,
        isLoadingUpdateProfile: state.profileReducer.isLoadingUpdateProfile,
        isLoadingChangePassword: state.profileReducer.isLoadingChangePassword
    };
}
export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateProfile,
        changePassword
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(EditProfileContainer));

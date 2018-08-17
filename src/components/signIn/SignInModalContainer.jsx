import React, { Component } from 'react'
import SignInModal from './SignInModal.jsx'

import { Form } from 'antd'

import _signIn from './_signIn.less'
class SignInModalContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			isLoginEmail: false,
			isVisiblePopUp: false
		}
	}

	onLoginEmailChange() {
		this.setState({
			isLoginEmail: !this.state.isLoginEmail
		})
	}

	handleLoginSocial(data) {
		this.props.loginSocial(data)
	}

	handleSignInEmail(e) {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.signIn({
					email: values.email,
					password: values.password
				})
			}
		})

	}
	render() {
		return (
			<div>
				<style dangerouslySetInnerHTML={{
					__html: _signIn
				}} />
				<SignInModal
					{...this.state}
					{...this.props}
					handleLoginSocial={(e) => this.handleLoginSocial(e)}
					onLoginEmailChange={(e) => this.onLoginEmailChange(e)}
					handleSignInEmail={(e) => this.handleSignInEmail(e)}
				/>
			</div>

		)
	}
}

SignInModalContainer = Form.create()(SignInModalContainer)
export default SignInModalContainer
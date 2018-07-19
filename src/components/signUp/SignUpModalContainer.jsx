import React, { Component } from 'react'
import SignUpModal from './SignUpModal.jsx'

import { Form } from 'antd'

class SignUpModalContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
	}
	handleSignUp(e) {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props.signUp({
					"name": values.name,
					"email": values.email,
					"password": values.password,
					"c_password": values.c_password,
					"phone": values.phone,
					"birthday": "2018-01-01 00:00:00",
					"gender": 1
				})
			}
		})

	}
	checkPassword(rule, value, callback) {
		const form = this.props.form
		if (value && value !== form.getFieldValue('password')) {
			let a = "Two passwords that you've entered are inconsistent"

			callback(a);
		} else {
			callback()
		}
	}
	render() {
		return (
			<SignUpModal
				{...this.state}
				{...this.props}
				checkPassword={(rule, value, callback) => this.checkPassword(rule, value, callback)}
				handleSignUp={(e) => this.handleSignUp(e)}
			/>
		)
	}
}

SignUpModalContainer = Form.create()(SignUpModalContainer)
export default SignUpModalContainer
import React, { Component } from 'react'
import ForgotModal from './ForgotModal.jsx'

import { Form } from 'antd'

class ForgotModalContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {


		}
	}

	handleForgot(e) {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {

			}
		})

	}
	render() {
		return (
			<ForgotModal
				{...this.state}
				{...this.props}

				handleForgot={(e) => this.handleForgot(e)}
			/>
		)
	}
}

ForgotModalContainer = Form.create()(ForgotModalContainer)
export default ForgotModalContainer
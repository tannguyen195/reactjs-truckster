import React, { Component } from 'react'
import ForgotModal from './ForgotModal.jsx'

import { Form } from 'antd'
import _forgot from './_forgot.less'
class ForgotModalContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {


		}
	}

	handleForgot(e) {
		e.preventDefault()
		this.props.form.validateFields((err) => {
			if (!err) {

			}
		})
	}
	
	render() {
		return (
			<div>
				<style dangerouslySetInnerHTML={{ __html: _forgot }} />
				<ForgotModal
					{...this.state}
					{...this.props}

					handleForgot={(e) => this.handleForgot(e)}
				/>
			</div>

		)
	}
}

ForgotModalContainer = Form.create()(ForgotModalContainer)
export default ForgotModalContainer
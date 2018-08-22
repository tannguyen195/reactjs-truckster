import React, { Component } from 'react';
import { Icon } from 'antd'
import _paymentSuccess from './_paymentSuccess.less'
class PaymentSuccess extends Component {


    render() {

        return (
            <div className="success-container">
                <style dangerouslySetInnerHTML={{ __html: _paymentSuccess }} />
                <div className="success-content">
                    <Icon type="check-circle-o" style={{ color: "#28a745", fontSize: '50px' }} />
                    <div className="order Display-2BlackCenter">Order Completed!</div>
                </div>
            </div>
        )
    }
}

export default PaymentSuccess;

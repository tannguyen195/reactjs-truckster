
import React, { Component } from 'react';
import ErrorPage from '../src/components/common/errorPage/ErrorPage'

class Error extends Component {

    render() {


        return (
            <ErrorPage status={404} />
        )
    }
}

export default Error
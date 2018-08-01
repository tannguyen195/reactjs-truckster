import React, { Component } from 'react';
import info from '../info/index.html'
export default class Info extends Component {

    render() {

        return (
            <div dangerouslySetInnerHTML={{ __html: info }}>

            </div>

        )
    }
}

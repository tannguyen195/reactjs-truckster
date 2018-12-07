

import React, { Component } from 'react';
import { Router } from 'routes'
export default class extends Component {
    static async getInitialProps(ctx) {

        if (ctx && ctx.req) {

            ctx.res.writeHead(301, { Location: `/food-truck-catering` })
            ctx.res.end()
        } else {
            Router.push(`/food-truck-catering`)
        }
    }
}

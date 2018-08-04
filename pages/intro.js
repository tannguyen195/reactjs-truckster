import React, { Component } from 'react';
import { Router } from 'routes'
export default class Intro extends Component {

    static async getInitialProps(ctx) {

        if (ctx && ctx.req) {
            ctx.res.writeHead(301, { Location: `/` })
            ctx.res.end()
        } else {
            Router.push(`/`)
        }
    }
}

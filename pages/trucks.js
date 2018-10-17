
import React, { Component } from 'react';
import { Router } from 'routes'
export default class TruckDetailRedirect extends Component {
    static async getInitialProps(ctx) {
      
        if (ctx && ctx.req) {
       
            ctx.res.writeHead(301, { Location: `/food-truck/co/denver/all` })
            ctx.res.end()
        } else {
            Router.push(`/food-truck/co/denver/all`)
        }
    }
}

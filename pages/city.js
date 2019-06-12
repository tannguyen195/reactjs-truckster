// import React, { Component } from 'react';
// import { Router } from 'routes'
// export default class City extends Component {
//     static async getInitialProps(ctx) {

//         if (ctx && ctx.req) {
//             ctx.res.writeHead(301, { Location: `/co/denver` })
//             ctx.res.end()
//         } else {
//             Router.push(`/co/denver`)
//         }
//     }
// }

import CityContainer from '../src/components/city/CityContainer'
export default CityContainer 

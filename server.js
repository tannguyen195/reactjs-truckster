const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 5000
const routes = require('./routes.js')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

// Old config
// const serve = require('serve');

// const server = serve(__dirname + '/build', {
//  port: 5000,
//  ignore: ['node_modules']
// })

app.prepare().then(() => {
    express().use(handler).listen(port)
  })
const express = require('express')
const next = require('next')
const cookieParser = require('cookie-parser')
const port = parseInt(process.env.PORT, 10) || 5000
const routes = require('./routes.js')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)
const path = require('path');
const axios = require('axios');
const xml = require('./global')
app.prepare().then(() => {
  const server = express();

  // Create dynamic sitemap
  const glob = require('glob')
  const fs = require('fs')

  const SITE_ROOT = process.env.SITE_ROOT || 'https://www.gotruckster.com'
  const SOURCE = process.env.SOURCE || path.join(__dirname, '..', '/pages', '/**/*.js')
  const DESTINATION = process.env.DESTINATION || path.join(__dirname, '..', '/static', '/sitemap.xml')

  let xml = xml


  axios({
    method: 'get',
    url: `https://dev.gotruckster.com/api/sitemap`,
    headers: {
      "Accept": "application/json",
    }
  })
    .then(function (response) {

      response.data.foodTrucks.forEach((page) => {
        ``

        page = `${SITE_ROOT}/food-truck/${page}`

        xml += '<url>'
        xml += `<loc>${page}</loc>`
        xml += `<lastmod>2018-09-15T11:59:46+00:00</lastmod>`
        xml += `<changefreq>always</changefreq>`
        xml += `<priority>0.5</priority>`
        xml += '</url>'
      })
      response.data.breweries.forEach((page) => {
        ``


        page = `${SITE_ROOT}/brewery/${page}`

        if (page.match(/.*\/index$/)) {
          page = page.replace(/(.*)index$/, '$1')
        }

        xml += '<url>'
        xml += `<loc>${page}</loc>`
        xml += `<lastmod>2018-09-15T11:59:46+00:00</lastmod>`
        xml += `<changefreq>always</changefreq>`
        xml += `<priority>0.5</priority>`
        xml += '</url>'
      })

      response.data.activities.forEach((page) => {
        ``
        page = `${SITE_ROOT}/event/${page}`

        if (page.match(/.*\/index$/)) {
          page = page.replace(/(.*)index$/, '$1')
        }

        xml += '<url>'
        xml += `<loc>${page}</loc>`
        xml += `<lastmod>2018-09-15T11:59:46+00:00</lastmod>`
        xml += `<changefreq>always</changefreq>`
        xml += `<priority>0.5</priority>`
        xml += '</url>'
      })
      xml += '</urlset>'
      fs.writeFileSync('static/sitemap.xml', xml)
    })
    .catch(function (error) {
      console.log("error", error)
    });






  // fs.writeFileSync(DESTINATION, xml)


  //render sitemap page
  const options = {
    root: path.join(__dirname, '/static'),
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    }
  };
  server.get('/sitemap.xml', (req, res) => {
    return (
      res.status(200).sendFile('sitemap.xml', options)
    )
  });

  server.use(cookieParser());
  server.use(handler).listen(port)
})
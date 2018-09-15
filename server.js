const express = require('express')
const next = require('next')
const cookieParser = require('cookie-parser')
const port = parseInt(process.env.PORT, 10) || 5000
const routes = require('./routes.js')
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app)
const path = require('path');
const axios = require('axios');
app.prepare().then(() => {
  const server = express();

  // Create dynamic sitemap
  const glob = require('glob')
  const fs = require('fs')

  const SITE_ROOT = process.env.SITE_ROOT || 'https://www.gotruckster.com'
  const SOURCE = process.env.SOURCE || path.join(__dirname, '..', '/pages', '/**/*.js')
  const DESTINATION = process.env.DESTINATION || path.join(__dirname, '..', '/static', '/sitemap.xml')

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->
  
  
  <url>
    <loc>https://gotruckster.com/</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>1.00</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/co</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/nearby</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/brewery/co/denver</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/food-truck/co/denver/all</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/help</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/about</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/privacy</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/info</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/event/co/denver</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.80</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/food-truck/co/denver</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/brewery-type/Large</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/brewery-type/Micro</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/brewery-type/Contract</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/brewery-type/Regional</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/American</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Asian</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/BBQ</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Burgers</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Cajun%20Creole</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Coffee</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Columbian</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/contact</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/info/best-munchies-denver</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/info/what-to-do-in-downtown-denver</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/info/what-food-is-denver-known-for</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/info/why-is-denver-a-good-place-for-a-food-truck</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/info/where-to-eat-in-denver</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/info/why-a-food-truck-is-a-great-for-weddings</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/info/best-types-of-venues-for-food-trucks</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/info/cost-to-start-a-food-truck</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Multi-Cuisine</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Brazilian</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Breakfast</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Cajun_Creole</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Carribian</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Chicago</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Chinese</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Crepes</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Cuban</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Dessert</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Ethiopian</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Farm%20Fresh</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Filipino</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/French</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/German</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Greek</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Hawaiian</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Indian</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Italian</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Jamaican</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Japanese</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Juice</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Latin%20American</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Latin%20Asian%20Fusion</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Mediterranean</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Mexican</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Middle%20Eastern</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Native%20American</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/New%20England</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Peruvian</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Pizza</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Polish</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Polynesian</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Puertorican</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Senegalese</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Southern</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Spanish</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Thai</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Turkish</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Vegan</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Vegetarian</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Venezuelan</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/cuisine/Wings</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.64</priority>
  </url>
  <url>
    <loc>https://gotruckster.com/pairing/co/denver</loc>
    <lastmod>2018-09-15T11:59:46+00:00</lastmod>
    <priority>0.51</priority>
  </url>
  
  `


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
        let modDate = new Date()
        let lastMod = `${modDate.getFullYear()}-${('0' + (modDate.getMonth() + 1)).slice(-2)}-${('0' + modDate.getDate()).slice(-2)}`

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
        let modDate = new Date()
        let lastMod = `${modDate.getFullYear()}-${('0' + (modDate.getMonth() + 1)).slice(-2)}-${('0' + modDate.getDate()).slice(-2)}`

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
        let modDate = new Date()
        let lastMod = `${modDate.getFullYear()}-${('0' + (modDate.getMonth() + 1)).slice(-2)}-${('0' + modDate.getDate()).slice(-2)}`

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
      console.log("xml", xml)
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
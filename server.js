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
  server.set('case sensitive routing', true);
  // Create dynamic sitemap
  const glob = require('glob')
  const fs = require('fs')

  const SITE_ROOT = process.env.SITE_ROOT || 'https://gotruckster.com'
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
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://gotruckster.com/nearby</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://gotruckster.com/brewery/co/denver</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/all</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://gotruckster.com/help</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://gotruckster.com/about</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://gotruckster.com/privacy</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck-catering</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://gotruckster.com/info</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://gotruckster.com/event/co/denver</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://gotruckster.com/brewery-type/large</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/brewery-type/micro</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/brewery-type/contract</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/brewery-type/regional</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/american</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/asian</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/bbq</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/burgers</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/coffee</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/columbian</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/contact</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/info/best-business-practices-for-food-trucks</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/info/improper-city-beer-garden-food-truck-park</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/info/what-is-denver-known-for</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/info/best-munchies-denver</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/info/what-to-do-in-downtown-denver</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/info/what-food-is-denver-known-for</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/info/why-is-denver-a-good-place-for-a-food-truck</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/info/where-to-eat-in-denver</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/info/why-a-food-truck-is-a-great-for-weddings</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/info/best-types-of-venues-for-food-trucks</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/multi-cuisine</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/brazilian</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/breakfast</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/cajun</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/caribbean</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/chinese</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/crepes</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/cuban</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/dessert</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/ethiopian</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/farm%20fresh</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/filipino</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/french</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/german</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/greek</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/indian</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/italian</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/jamaican</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/japanese</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/juice</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/latin%20american</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/latin%20asian%20fusion</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/mediterranean</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/mexican</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/middle%20eastern</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/native%20american</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/new%20england</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/peruvian</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/pizza</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/polish</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/polynesian</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/puertorican</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/senegalese</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/southern</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/spanish</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/thai</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/turkish</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/vegan</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/vegetarian</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/venezuelan</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/co/denver/wings</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/la-rola-urban-colombian-food</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.51</priority>
</url>
<url>
  <loc>https://gotruckster.com/food-truck/basic-kneads-pizza</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.51</priority>
</url>
<url>
  <loc>https://gotruckster.com/pairing/co/denver</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
  <priority>0.51</priority>
</url>
<url>
  <loc>https://gotruckster.com/info/cost-to-start-a-food-truck</loc>
  <lastmod>2018-12-15T03:33:48+00:00</lastmod>
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

        page = `${SITE_ROOT}/food-truck/${page}`

        xml += '<url>'
        xml += `<loc>${page}</loc>`
        xml += `<lastmod>2018-11-22T02:21:29+00:00</lastmod>`
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
        xml += `<lastmod>2018-11-22T02:21:29+00:00</lastmod>`
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
        xml += `<lastmod>2018-11-22T02:21:29+00:00</lastmod>`
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
      'Content-Type': 'application/xml',
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
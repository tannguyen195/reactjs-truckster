const routes = require('next-routes')

module.exports = routes()
    .add('about')
    .add('help')
    .add('contact')
    .add('privacy')
    .add('user')
    .add('edit')
    .add('nearby')
    .add('search')



    .add('cuisines', '/cuisine')
    .add('cuisine', '/cuisine/:value')

    .add('breweries', '/brewery')
    .add('brewery', '/brewery/:slug')
    .add('breweryType', '/brewery-type/:value')

    .add('trucks', '/food-truck')
    .add('truck', '/food-truck/:slug')

    .add('activites', '/activity')
    .add('activity', '/activity/:name--:id')
    .add('city', '/:cityname')
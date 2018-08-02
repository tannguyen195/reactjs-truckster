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
    .add('intro')
    
    .add('pairing', '/pairing/:state/:city')

    .add('activities', '/activity/:state/:city')
    .add('activity', '/activity/:name--:id')

    .add('cuisines', '/cuisine')
    .add('cuisine', '/cuisine/:value')

    .add('breweries', '/brewery/:state/:city')
    .add('brewery', '/brewery/:slug')

    .add('breweryType', '/brewery-type/:value')

    .add('trucks', '/food-truck/:state/:city')
    .add('truck', '/food-truck/:slug')

    .add('cities', '/co')
    .add('city', '/:state/:city')
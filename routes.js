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
    .add('city')

    .add('info')
    .add('infoDetail', '/info/:slug')
    .add('pairing', '/pairing/:state/:city')

    .add('events', '/event/:state/:city')
    .add('event', '/event/:name--:id')

    .add('cuisines', '/cuisine')
    .add('cuisine', '/cuisine/:value')

    .add('breweries', '/brewery/:state/:city')
    .add('brewery', '/brewery/:slug')

    .add('breweryType', '/brewery-type/:value')
    
    .add('truckDetailRedirect', '/truck/:state/:city')
    .add('truckRedirect', '/truck/:state/:city')
    .add('trucks', '/food-truck/:state/:city')
    .add('truck', '/food-truck/:slug')

    .add('cities', '/co')
    .add('cityDetail', '/:state/:city')

 
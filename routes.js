const routes = require('next-routes')

module.exports = routes()
    .add('about')
    .add('help')
    .add('contact')
    .add('privacy')
    .add('user')
    .add('edit')
    .add('nearby')

    .add('cuisines', '/truck/cuisine', 'cuisines')
    .add('cuisine', '/truck/cuisine/:value', 'cuisine')

    .add('activites', '/activity', 'activites')
    .add('activity', '/activity/:name--:id', 'activity')

    .add('breweries', '/brewery', 'breweries')
    .add('brewery', '/brewery/:name--:id', 'brewery')

    .add('trucks', '/food-truck', 'trucks')
    .add('truck', '/food-truck/:name--:id', 'truck')
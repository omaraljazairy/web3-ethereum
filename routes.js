const routes = require('next-routes-extended');

module.exports = routes()
.add('/campaigns/new', '/campaigns/new')
.add('/campaigns/:address/requests/new', '/campaigns/requests/new')
.add('/campaigns/:address/requests', '/campaigns/requests/index')
.add('/campaigns/:address', '/campaigns/show')

console.log('routes')
var users = require('../controllers/users.js')
var trips = require('../controllers/trips.js')
var stops = require('../controllers/stops.js')

module.exports = function(app){
  app.post('/users',users.create);
  app.post('/users',users.delete);
  app.post('/users',users.update)
  app.get('/users',users.index);
  app.post('/trips',trips.create);
  app.post('/trips',trips.delete);
  app.post('/trips',trips.update)
  app.get('/trips',trips.index);
  app.post('/stops',stops.create);
  app.post('/stops',stops.delete);
  app.post('/stops',stops.update)
  app.get('/stops',stops.index);
};

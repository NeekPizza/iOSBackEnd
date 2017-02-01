console.log('routes')
var users = require('../controllers/users.js')
var trips = require('../controllers/trips.js')
var stops = require('../controllers/stops.js')

module.exports = function(app){
  app.post('/users/create',users.create);
  app.post('/users/delete',users.delete);
  app.post('/users/update',users.update)
  app.get('/users',users.index);
  app.post('/trips/create',trips.create);
  app.post('/trips/delete',trips.delete);
  app.post('/trips/update',trips.update)
  app.get('/trips',trips.index);
  app.post('/stops/create',stops.create);
  app.post('/stops/delete',stops.delete);
  app.post('/stops/update',stops.update)
  app.get('/stops',stops.index);
};

var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express();
app.use( express.static( path.join( root, 'server/config' )));
app.use(bp.urlencoded({extended: true}));
require('./server/config/mongoose.js');
require("./server/config/routes.js")(app);

app.listen( port, function() {
  console.log( `mean_test running on port ${ port }` );
});

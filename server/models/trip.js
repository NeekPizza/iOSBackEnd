console.log('trip model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
TripSchema = new mongoose.Schema({
  _user:{type:Schema.Types.ObjectId, ref:'User'},
  trip_name:String,
  stops:{type:Schema.Types.ObjectId, ref:'StopSchema'},
  startDate: { type: Date, default: Date.now },
  endDate:{ type: Date, default: Date.now }
})
mongoose.model('Trips',TripSchema)

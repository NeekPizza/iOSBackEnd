console.log('stop model');
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
StopSchema = new mongoose.Schema({
  _trip:{type:Schema.Types.ObjectId, ref:'Trip'},
  name:String,
  description:String,
  long:Number,
  lad: Number,
  img:String,
  createdAt: { type:Date, default: Date.now }
})

mongoose.model('Stops',StopSchema)

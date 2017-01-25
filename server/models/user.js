console.log('user model');
var mongoose = require('mongoose')
UserSchema = new mongoose.Schema({
  name:String,
  createdAt: { type:Date, default: Date.now }
})

mongoose.model('User',UserSchema);

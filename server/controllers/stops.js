console.log('stops controller -- Server Side');
var mongoose = require('mongoose');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the stopsControllers below
var Stops=mongoose.model('Stops');
function StopsController(){
  this.index = function(req, res) {
    console.log('Stops index');
    Stops.find({}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  };
  this.create = function(req,res){
    console.log('Stops create');
   console.log('REQ.body', req.body);
   var stop = new Stops({name: req.body.name, age: req.body.age});
   console.log(stop);
   stop.save(function(err) {
     if (err) {
       console.log(err);
       res.json(err);
     } else {
       // res.redirect('/stops');
       res.json({success: true});
     }
   })
 };
 this.update = function(req, res) {
    console.log(req.params, req.body);
    Stops.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        for (var i in req.body) {
          if (req.body[i] != data[i]) {
            data[i] = req.body[i];
          }
        }
        console.log(data);
        data.save(function(err, data) {
          if (err) {
            console.log(err);
            res.json(err);
          } else {
            console.log(data);
            res.json(data);
          }
        })
      }
    })
  };
  this.show = function(req, res) {
    console.log(req.params);
    Stops.findOne({_id: req.params.id}, function(err,data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        console.log(data);
        res.json(data);
      }
    })
  };
this.delete = function(req, res) {
    console.log(req.params.id);
    Stops.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        Stops.remove(data, function(err) {
          if (err) {
            console.log(err);
            res.json(err);
          } else {
            console.log('deleted');
            res.json({success: true});
          }
        })
      }
    })
  }
};
module.exports = new StopsController();

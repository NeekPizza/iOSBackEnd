console.log('trips controller -- Server Side');
var mongoose=require('mongoose');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var Trips=mongoose.model('Trips');
function TripsController(){
  this.index = function(req, res) {
    console.log('Trips index');
    Trips.find({}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  };
  this.create = function(req,res){
    console.log('Trips create');
   console.log('REQ.body', req.body);
   var friend = new Trips({name: req.body.name, age: req.body.age});
   console.log(friend);
   friend.save(function(err) {
     if (err) {
       console.log(err);
       res.json(err);
     } else {
       // res.redirect('/friends');
       res.json({success: true});
     }
   })
 };
 this.update = function(req, res) {
    console.log(req.params, req.body);
    Trips.findOne({_id: req.params.id}, function(err, data) {
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
    Trips.findOne({_id: req.params.id}, function(err,data) {
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
    Trips.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        Trips.remove(data, function(err) {
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
module.exports = new TripsController();

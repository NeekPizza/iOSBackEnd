console.log('users controller -- Server Side');
var mongoose=require('mongoose');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the usersControllers below
var User=mongoose.model('User');
function UsersController(){
  this.index = function(req, res) {
    console.log('Users index');
    User.find({}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  };
  this.create = function(req,res){
    console.log('Users create');
   console.log('REQ.body', req.body);
   var user = new User({name: req.body.name});
   console.log(user);
   user.save(function(err) {
     if (err) {
       console.log(err);
       res.json(err);
     } else {
       // res.redirect('/users');
       res.json({success: true});
     }
   })
 };
 this.update = function(req, res) {
    console.log(req.params, req.body);
    User.findOne({_id: req.params.id}, function(err, data) {
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
    User.findOne({_id: req.params.id}, function(err,data) {
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
    User.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        User.remove(data, function(err) {
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
module.exports = new UsersController();

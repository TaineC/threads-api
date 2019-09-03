var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    id: Number,
    name: String,
    // username: String,
    password: String,
    email: String,
    role:Number,
    location:String,
  },
  { timestamps: true }
);


module.exports = mongoose.model('User', UserSchema);
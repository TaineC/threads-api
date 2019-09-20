var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Product = require('./product-model');

var UserSchema = new Schema(
  {
    id: Number,
    name: String,
    username: String,
    password: String,
    email: String,
    role:Number,
    location:String,
    photo:String,
  },
  { 
  	timestamps: true,
  	toJSON: { virtuals: true }
  }
);

UserSchema.virtual('purchases', {
  ref: 'Product', // The model to use
  localField: 'id', 
  foreignField: 'purchaser_id', 
  justOne: false,
});
UserSchema.virtual('products',{
  ref: 'Product',
  localField:'id',
  foreignField:'seller_id',
  justOne: false,
})


UserSchema.virtual('purchases', {
  ref: 'Product', // The model to use
  localField: 'id', 
  foreignField: 'purchaser_id', 
  justOne: false,
});

module.exports = mongoose.model('User', UserSchema);
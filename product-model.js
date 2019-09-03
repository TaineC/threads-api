const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProjectSchema = new Schema(
  {
    id: Number,
    name: String,
    description: String,
    photo:String,
    price:Number,
    cat_id: Number,
    user_id:Number,
   
  },
  { timestamps: true }
);


module.exports = mongoose.model('Product', ProjectSchema);
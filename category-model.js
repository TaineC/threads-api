var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TypeSchema = new Schema(
  {
    id: Number,
    name: String,
  },
  { timestamps: true }
);


module.exports = mongoose.model('Category', TypeSchema);
const mongoose = require('mongoose');

let phoneSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, 'The phone brand is required']
  },
  name: {
    type: String,
    required: [true, 'The phone name is required']
  },
  image: {
    type: String, default: ''
  },
  specs: {
    type: Array,
    default: []
  }
});
phoneSchema.set('toJSON', { virtuals: true });
phoneSchema.virtual('imageURL').get(function() {
  if(this.image.includes('http')){
    return this.image;
  }
  return `http://localhost:3000${this.image}`;
});

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;

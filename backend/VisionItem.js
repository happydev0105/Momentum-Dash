const mongoose = require('mongoose');

const VisionItemSchema = new mongoose.Schema({
  content: String,
});

module.exports = mongoose.model('VisionItem', VisionItemSchema);

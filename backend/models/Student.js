const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true, unique: true },
  attendance: { type: Number, required: true },
  marks: { type: Number, required: true },
  certificateGenerated: { type: Boolean, default: false }
});

module.exports = mongoose.model('Student', studentSchema);

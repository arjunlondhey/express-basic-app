const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const taskSchema = new mongoose.Schema({
  key: String,
  createdAt: Date,
  counts: [Number],
  value: String,
});

// add plugin that converts mongoose to json
taskSchema.plugin(toJSON);

/**
 * @typedef Records
 */

const Records = mongoose.model('records', taskSchema);

module.exports = Records;

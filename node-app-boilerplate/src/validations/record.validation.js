const Joi = require('joi').extend(require('@joi/date'));

const getRecords = {
  body: Joi.object()
    .keys({
      startDate: Joi.date().format('YYYY-MM-DD'),
      endDate: Joi.date().format('YYYY-MM-DD'),
      minCount: Joi.number(),
      maxCount: Joi.number(),
    })
    .min(1),
};

module.exports = {
  getRecords,
};

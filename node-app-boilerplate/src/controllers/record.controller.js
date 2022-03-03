const catchAsync = require('../utils/catchAsync');
const { recordService } = require('../services');

const getRecords = catchAsync(async (req, res) => {
  const result = await recordService.queryRecords(req.body);
  res.send(result);
});

module.exports = {
  getRecords,
};

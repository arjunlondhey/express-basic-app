const { Records } = require('../models');

/**
 * Fetch Records
 * @param {Object} recordBody
 * @returns {Promise<Records>}
 * @returns {Promise<QueryResult>}
 */
const queryRecords = async (recordBody) => {
  const { startDate, endDate, minCount, maxCount } = recordBody;

  return Records.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(`${startDate}T00:00:00.000Z`), // after the start date
          $lt: new Date(`${endDate}T00:00:00.000Z`), // before the end date
        },
      },
    },
    { $unwind: '$counts' },
    {
      $group: {
        _id: '$_id',
        count: { $sum: '$counts' },
        key: { $first: '$key' },
        createdAt: { $first: '$createdAt' },
      },
    },
    {
      $match: {
        count: {
          $gte: minCount, // larger than the min count
          $lt: maxCount, // smaller than the max count
        },
      },
    },
    {
      $project: {
        totalCount: '$count',
        key: 1,
        createdAt: 1,
        _id: 0,
      },
    },
  ]);
};

module.exports = {
  queryRecords,
};

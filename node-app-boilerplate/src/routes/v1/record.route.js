const express = require('express');
const validate = require('../../middlewares/validate');
const recordValidation = require('../../validations/record.validation');
const recordController = require('../../controllers/record.controller');

const router = express.Router();

router.route('/').post(validate(recordValidation.getRecords), recordController.getRecords);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Records
 *   description: Record management and retrieval
 */

/**
 * @swagger
 * /:
 *
 *   post:
 *     summary: Get all records
 *     description: Only admins can retrieve all records.
 *     tags: [Records]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - startDate
 *               - endDate
 *               - minCount
 *               - maxCount
 *             properties:
 *               startDate:
 *                 type: string
 *               endDate:
 *                 type: string
 *               minCount:
 *                 type: string
 *               maxCount:
 *                  type: string
 *             example:
 *               startDate: 2016-01-26
 *               endDate: 2016-02-26
 *               minCount: 2700
 *               maxCount: 3000
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Records'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

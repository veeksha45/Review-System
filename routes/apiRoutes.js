const express = require('express');
const router = express.Router();
const controller = require('../controllers/apiControllers');

router.post('/add', controller.addReview);
router.get('/:name', controller.getReviewsByCompany);

module.exports = router;

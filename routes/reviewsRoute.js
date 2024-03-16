const express = require('express');
const router = express.Router();
const reviewController = require("../controllers/reviewController")
const authenticate = require('../middleware/authenticateToken');



router.post('/:id/reviews', authenticate, reviewController.rateAndReviewMovie);
router.put('/:movieId/reviews/:reviewId', authenticate, reviewController.updateReview);
router.delete('/:movieId/reviews/:reviewId', authenticate, reviewController.deleteReview);
router.get('/:id/reviews', authenticate, reviewController.listReviewsForMovie);
router.get('/:id/averageRating', authenticate, reviewController.getAverageRatingForMovie);

module.exports = router;

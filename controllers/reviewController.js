const Review = require('../models/reviewModel');
const reviewService = require('../services/reviewService');

// Rate and review a movie
const rateAndReviewMovie = async (req, res) => {
    const { rating, text } = req.body;
    const { id } = req.params;

    try {
        const review = await reviewService.rateAndReviewMovie(id, req.user.id, rating, text);
        res.status(201).json({ message: 'Review posted successfully', review });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update review for a movie
const updateReview = async (req, res) => {
    const { movieId, reviewId } = req.params;
    const { rating, text } = req.body;

    try {
        const review = await reviewService.updateReview(movieId, reviewId, req.user.id, rating, text);
        if (!review) {
            return res.status(404).json({ message: 'Review not found or you are not authorized to update' });
        }
        res.status(200).json({ message: 'Review updated successfully', review });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete a review
const deleteReview = async (req, res) => {
    const { movieId, reviewId } = req.params;

    try {
        const deletedReview = await reviewService.deleteReview(movieId, reviewId, req.user.id);
        if (!deletedReview) {
            return res.status(404).json({ message: 'Review not found or you are not authorized to delete' });
        }
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// List reviews for a movie
const listReviewsForMovie = async (req, res) => {
    const { id } = req.params;

    try {
        const reviews = await reviewService.listReviewsForMovie(id);
        res.status(200).json(reviews);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Calculate average rating for a movie
const getAverageRatingForMovie = async (req, res) => {
    const { id } = req.params;

    try {
        const averageRating = await reviewService.getAverageRatingForMovie(id);
        res.status(200).json({ averageRating });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { rateAndReviewMovie, updateReview, deleteReview, listReviewsForMovie, getAverageRatingForMovie };

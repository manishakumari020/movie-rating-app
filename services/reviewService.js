const Review = require('../models/reviewModel');

const rateAndReviewMovie = async (movieId, userId, rating, text) => {
    console.log("Inside rate and review service");
    try {
        const review = new Review({ movie: movieId, user: userId, rating, text });
        await review.save();
        return review;
    } catch (error) {
        throw error;
    }
};

const updateReview = async (reviewId, userId, movieId, rating, text) => {
    try {
        const updatedReview = await Review.findOneAndUpdate(
            { _id: reviewId, user: userId, movie: movieId },
            { rating, text },
            { new: true }
        );
        return updatedReview;
    } catch (error) {
        throw error;
    }
};

const deleteReview = async (reviewId, userId, movieId) => {
    try {
        await Review.findOneAndDelete({ _id: reviewId, user: userId, movie: movieId });
    } catch (error) {
        throw error;
    }
};

const listReviewsForMovie = async (movieId) => {
    try {
        const reviews = await Review.find({ movie: movieId }).populate('user', 'username');
        return reviews;
    } catch (error) {
        throw error;
    }
};

const getAverageRatingForMovie = async (movieId) => {
    try {
        const reviews = await Review.find({ movie: movieId });
        if (reviews.length === 0) {
            return null;
        }
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = totalRating / reviews.length;
        return averageRating;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    rateAndReviewMovie,
    updateReview,
    deleteReview,
    listReviewsForMovie,
    getAverageRatingForMovie
};

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ratings: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            rating: Number,
            review: String
        }
    ]
});

const Movie =  mongoose.model('Movie', movieSchema);

module.exports = Movie


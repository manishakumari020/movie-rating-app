// services/movieService.js

const Movie = require("../models/movieModel");

const addMovie = async (movieData) => {
    try {
        const movie = await Movie.create(movieData);
        return movie;
    } catch (error) {
        throw error;
    }
};

const updateMovie = async (movieId, updatedData) => {
    try {
        const movie = await Movie.findByIdAndUpdate(movieId, { $set: updatedData }, { new: true });
        return movie;
    } catch (error) {
        throw error;
    }
};

const deleteMovie = async (movieId) => {
    try {
        const movie = await Movie.findByIdAndDelete(movieId);
        return movie;
    } catch (error) {
        throw error;
    }
};

const getMovieById = async (movieId) => {
    try {
        const movie = await Movie.findById(movieId);
        return movie;
    } catch (error) {
        throw error;
    }
};

const getAllMovies = async () => {
    try {
        const movies = await Movie.find();
        return movies;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    addMovie,
    updateMovie,
    deleteMovie,
    getMovieById,
    getAllMovies
};



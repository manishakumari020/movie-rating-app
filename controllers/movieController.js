const Movie = require('../models/movieModel');
const movieService = require('../services/movieService');

const addMovie = async (req, res) => {
    try {
        console.log("Inside add Movie")
        const { title, director, genre, releaseYear, description } = req.body;
        const movie = await movieService.addMovie({ title, director, genre, releaseYear, description });
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const movie = await movieService.updateMovie(id, updatedData);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMovie = await movieService.deleteMovie(id);
        if (!deletedMovie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await movieService.getMovieById(id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllMovies = async (req, res) => {
    try {
        const movies = await movieService.getAllMovies();
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addMovie, updateMovie, deleteMovie, getMovieById, getAllMovies };


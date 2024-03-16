const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');
const authenticate = require('../middleware/authenticateToken');


router.post('/',  authenticate, movieController.addMovie);
router.put('/:id', authenticate, movieController.updateMovie);
router.delete('/:id', authenticate, movieController.deleteMovie);
router.get('/:id', authenticate, movieController.getMovieById);
router.get('/', authenticate, movieController.getAllMovies);



module.exports = router;
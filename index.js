require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authRoutes = require("./routes/userRoute");
const authMovieRoute = require("./routes/movieRoute")
const authReviewRoute = require("./routes/reviewsRoute");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Could not connect to MongoDB", err))

// Define routes
app.use('/api/users', authRoutes);
app.use('/api/movies', authMovieRoute);
app.use("/api/movies/", authReviewRoute);

app.get("/", (req, res) => {
    res.send("Backend server is running")
})

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

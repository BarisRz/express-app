const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const welcome = (req, res) => {
  res.send("Welcome!");
};
app.get("/", welcome);

const getMovies = (req, res) => {
  res.status(200).json(movies);
};
app.get("/api/movies", getMovies);

const searchById = (req, res) => {
  const id = req.params.id;
  const movie = movies.find((film) => film.id == id);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(404).send("Film non trouvé");
  }
};
app.get("/api/movies/:id", searchById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

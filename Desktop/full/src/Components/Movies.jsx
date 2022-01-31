import React from "react";
import TableMovie from "./TableMovie";
import { useState } from "react";

function Movies() {
  //hooks
  const [movies, setMovies] = useState(null);

  if (movies === null) getMovies(setMovies);

  return (
    <div>
      <TableMovie data={movies}></TableMovie>
    </div>
  );
}

async function getMovies(setMovies) {
  const URL = "https://tw-tw.herokuapp.com/api/movies";

  await fetch(URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
    .then((res) => res.json())
    .then((result) => {
      setMovies(result);
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default Movies;

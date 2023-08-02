// ///////////
// VUEJS
// ///////////

import { createApp } from "vue";

createApp({
  data() {
    return {
      message: "Hi from VueJS"
    }
  }
}).mount("#vue-results")

// ///////////
// MUSTACHEJS
// ///////////

import Mustache from "mustachejs";

// 1. Select element ( results id div)
const result = document.querySelector("#results");
const template = document.querySelector("#card-template");
// 2. fetch OMDBAPI to get the movie data
const url = "http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7"
// 3. insert the movies in the result div
fetch(url)
  .then(response => response.json())
  .then((data) => {
    const movies = data.Search;
    const movieData = {
      movieList: movies
    }
    console.log(movieData);
    const output = Mustache.render(template.innerHTML, movieData);
    result.innerHTML = output;
  });

  // const example = Mustache.render(
  //   "<h1>{{title}} my name is {{name}}</h1>", 
  //   {"title": "Hi from Mustache", "name": "Jovon"}
  // );
  // console.log(example);
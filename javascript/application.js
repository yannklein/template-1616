console.log("Good Thursday!");

// ///////////
// Vanilla JS
// ///////////

// 1. Select elements ( results div)
// const results = document.querySelector("#results");

// // 2.5 Fetch the Omdb API
// const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7";
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     const movies = data.Search;
//     console.log(movies);
//     // 3. Change the DOM: insert movie cards in the results div
//     movies.forEach((movie) => {
//       results.insertAdjacentHTML(
//         "beforeend",
//         `<div class='col-6'>
//           <div class="card">
//             <img src="${movie.Poster}" class="card-img-top" alt="">
//             <div class="card-body">
//               <h6 class="card-title">${movie.Title}</h6>
//               <p class="card-text">${movie.Year}</p>
//               <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
//             </div>
//           </div>
//         </div>`
//       );
//     });
//   })


// ///////////
// JS with templates
// ///////////
// const results = document.querySelector("#results");
// const movieCardTemplate = document.querySelector("#movieCardTemplate");

// const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7";
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     const movies = data.Search;
//     movies.forEach((movie) => {
//       // retrieve the template
//       const clone = movieCardTemplate.content.cloneNode(true);
//       // feed the template with data
//       clone.querySelector(".card-img-top").src = movie.Poster;
//       clone.querySelector(".card-title").innerText = movie.Title;
//       clone.querySelector(".card-text").innerText = movie.Year;
//       clone.querySelector("a").href = `https://www.imdb.com/title/${movie.imdbID}`;
//       // insert the template full of data in the HTML
//       results.appendChild(clone);
//     });
//   })


// ///////////
// MUSTACHEJS
// ///////////
import Mustache from "mustachejs";

// const test = Mustache.render(
//   "<div><h1>{{myTitle}}</h1></div>", 
//   {"myTitle": "Hi from #1383"}
// );
// => "<div><h1>Hi from #1383</h1></div>"
// console.log(test);

const results = document.querySelector("#results");
const movieCardTemplate = document.querySelector("#movieCardTemplate");
const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7";
fetch(url)
  .then(response => response.json())
  .then((data) => {
    const movies = data.Search;
    // movies => [{Title: XXX, Poster:XXX, ...}, {}, {}]
    const movieFormattedData = {
      "movies": movies
    }
    // movieFormattedData 👇
    // { "movies": [{Title: XXX, Poster:XXX, ...}, {}, {}] }

    const template = movieCardTemplate.innerHTML;
    // movies.forEach((movie) => {
    //   // retrieve the template
    //   // console.log(template);
    //   // movie => {Title: XXX, Poster: XXX, imdbID: XXX, Year: XXX}
    //   const movieCard = Mustache.render(template, movie);
    //   // console.log(movieCard);
    //   results.insertAdjacentHTML("beforeend", movieCard);
    // });
    const movieCards = Mustache.render(template, movieFormattedData);
    results.insertAdjacentHTML("beforeend", movieCards);
  })


// ///////////
// VUEJS
// ///////////

import { createApp } from "vue";

createApp({
  data() {
    return {
      message: "Hello from Vue.js!"
    }
  }
}).mount("#app")
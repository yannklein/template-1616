console.log("Good Sat!");

const url = "http://www.omdbapi.com/?s=lord of the rings&apikey=adf1f2d7"

// ///////////
// Vanilla JS
// ///////////


// // 1. Select elements (div results)
// const results = document.querySelector("#results");

// // 2. Listen to an event: no events

// // 2.5 Fetch the data from API
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data.Search);
//     // 3. Change the DOM, display the cards
//     const moviesData = data.Search;
//     moviesData.forEach((movieData) => {
//       const cardTemplate = `
//         <div class='col-6 mb-3'>
//           <div class="card">
//             <img src="${movieData.Poster}" class="card-img-top" alt="${movieData.Title}">
//             <div class="card-body">
//               <h2 class="card-title">${movieData.Title}</h2>
//               <p class="card-text">${movieData.Year}</p>
//               <a href="https://www.imdb.com/title/${movieData.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
//             </div>
//           </div>
//         </div>`;
//         results.insertAdjacentHTML("beforeend", cardTemplate);
//     });
//   });

// ///////////
// JS with templates
// ///////////

// const results = document.querySelector("#results");
// const template = document.querySelector("#movieCardTemplate");

// // console.log(template.content);
// // console.log(template.innerHTML);
// // console.log(template.outerHTML);

// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     // console.log(data.Search);
//     const moviesData = data.Search;
//     moviesData.forEach((movieData) => {
//       const templateClone = template.content.cloneNode(true);
//       // console.log(templateClone);
//       // console.log(movieData);
//       templateClone.querySelector("h2").innerText = movieData.Title;
//       templateClone.querySelector("p").innerText = movieData.Year;
//       templateClone.querySelector("img").src = movieData.Poster;
//       templateClone.querySelector("img").alt = movieData.Title;
//       templateClone.querySelector("a").href = `https://www.imdb.com/title/${movieData.imdbID}`;
//       // console.log(templateClone);
//       results.appendChild(templateClone);
//     });
//   });

// ///////////
// MUSTACHEJS (simple version)
// ///////////

import Mustache from "mustachejs";

// const test = Mustache.render(
//   "<h1>{{title}}</h1>", 
//   {"title": "Hi from Mustache"}
// );
// console.log(test);

// // ///////////
// // MUSTACHEJS
// // ///////////

// const results = document.querySelector("#results");
// const template = document.querySelector("#movieCardTemplate");


// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     const moviesData = data.Search;
//     moviesData.forEach((movieData) => {
//       const cardTemplate = template.innerHTML;
//       // {
//       //   "Title": "The Lord of the Rings: The Two Towers",
//       //   "Year": "2002",
//       //   "imdbID": "tt0347436",
//       //   "Type": "game",
//       //   "Poster": "https://m.media-amazon.com/images/M/MV5BODI0Mzk3OTM4N15BMl5BanBnXkFtZTgwMTM4MTk4MDE@._V1_SX300.jpg"
//       //   }
//       const output = Mustache.render(cardTemplate, movieData);
//       results.insertAdjacentHTML("beforeend", output);
//     });
//   });

// ///////////
// MUSTACHEJS (with iteration)
// ///////////

// const results = document.querySelector("#results");
// const template = document.querySelector("#movieCardTemplate");

// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     const cardTemplate = template.innerHTML;
//     const moviesData = data.Search;
//     const formattedData = { movies: moviesData }
//     // formattedData ==> {movies: [ {Title: "XXX", Poster: "XXX", ...}, {}, {}, {}]}

//     const output = Mustache.render(cardTemplate, formattedData);
//     console.log(output);
//     results.innerHTML = output;
//   });

// ///////////
// VUEJS
// ///////////

import { createApp } from "vue";

createApp({
  data() {
    return {
      message: "Hi batch #1616!"
    }
  }
}).mount("#vue-example");
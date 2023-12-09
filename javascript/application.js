console.log("Good Sat!");

// ///////////
// Vanilla JS
// ///////////


// // 1. Select elements (results)
// const results = document.querySelector("#results");
// // 2. No event
// // 3. Fetch the OMDB API get movie data
// const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=48727053";
// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     const movies = data.Search;
//     // 4. Change DOM (insertAdjacentHTML)
//     movies.forEach((movie) => {
//       results.insertAdjacentHTML(
//         "beforeend", 
//         `<div class='col-4'>
//           <div class="card">
//             <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
//             <div class="card-body">
//               <h6 class="card-title">${movie.Title}</h6>
//               <p class="card-text">${movie.Year}</p>
//               <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
//             </div>
//           </div>
//         </div>`);
//     });
//   })

// ///////////
// JS with templates
// ///////////

// const results = document.querySelector("#results");
// const template = document.querySelector("#movieCardTemplate");

// // console.log(template.content); // the card itself (HTML element)
// // console.log(template.innerHTML); // the card itself (String)

// const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=48727053";
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     const movies = data.Search;
//     movies.forEach((movie) => {
//       const cardClone = template.content.cloneNode(true) // cloning the card with its content (thanks to the true argument)
//       cardClone.querySelector("img").src = movie.Poster;
//       cardClone.querySelector("img").alt = movie.Title;
//       cardClone.querySelector(".card-title").innerText = movie.Title;
//       cardClone.querySelector(".card-text").innerText = movie.Year;
//       cardClone.querySelector("a").href = `https://www.imdb.com/title/${movie.imdbID}`;
//       results.appendChild(cardClone); // insert the HTML element card to the result HTML element
//     });
//   })

// ///////////
// MUSTACHEJS (simple version)
// ///////////

// import Mustache from "mustachejs";

// // const templateString = "<h1>{{name}}</h1>";
// // const data = {name: "Meg"}
// // const test  = Mustache.render(templateString, data)
// // console.log(test);

// const results = document.querySelector("#results");
// const template = document.querySelector("#movieCardTemplate");

// const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=48727053";
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     const movies = data.Search;
//     movies.forEach((movie) => {
//       // movie 👇
//       // {
//       //   "Title": "Harry Potter and the Deathly Hallows: Part 2",
//       //   "Year": "2011",
//       //   "imdbID": "tt1201607",
//       //   "Type": "movie",
//       //   "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
//       // }
//       const card = Mustache.render(template.innerHTML, movie);
//       console.log(card);
//       results.insertAdjacentHTML("beforeend", card);
//     });
//   });

// ///////////
// MUSTACHEJS
// ///////////

// import Mustache from "mustachejs";

// const results = document.querySelector("#results");
// const template = document.querySelector("#movieCardTemplate");

// const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=48727053";
// fetch(url)
//   .then(response => response.json())
//   .then((data) => {
//     // data 👇
//     // {
//     //   Search: [
//     //     {Title: "...", },
//     //     {Title: "...", },
//     //     {Title: "...", },
//     //   ]
//     // }
//     const moviesData = { "movies": data.Search }
//     const cards = Mustache.render(template.innerHTML, moviesData);
//     results.insertAdjacentHTML("beforeend", cards);
//   });

// ///////////
// VUEJS
// ///////////

import { createApp } from "vue";

createApp({
  data() {
    return {
      message: "Hi batch #1383!"
    }
  }
}).mount("#vue-example");
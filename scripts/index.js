import { genres } from "../data/movie.js";
const apiURL = `http://www.omdbapi.com/?apikey=5446693`;
const Moviegrid = document.querySelector("#main");
let MOvie=[]
function generategrid() {
  let generategridHTML = "";
  genres.forEach((g) => {
    generategridHTML += 
    `
    <section id="card">
        <div class="section-title"><h2>${g.genre}</h2></div>
        <div class="section-card-container" data-id="${g.genre}">
        </div>
   </section>
   `;
  });
  Moviegrid.innerHTML = generategridHTML;
}
generategrid();
const sectionContainer=document.querySelectorAll('.section-card-container')
async function genrateSections(){
   let matchingItem;
   sectionContainer.forEach((section)=>{
      genres.forEach((g)=>{
         if(g.genre===section.dataset.id){
           matchingItem=g.movies
         }
      })
      if(matchingItem){
         console.log(matchingItem)
      }
    })
}
MOvie=genrateSections();
console.log(MOvie)
async function fetchMovie(movie) {
  try {
    const reponse = await fetch(`${apiURL}` + `&i=${movie}`);
    const data = await reponse.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
let actionMoviesHTML = "";
function generateMovie() {
  actions.forEach((movie) => {
    actionMoviesHTML += `
          <div class="section-card">
            <div class="section-image-container">
              <img src=${movie.Poster} />
            </div>
            <div class="section-card-description">
              <p class="section-card-description-title">${movie.Title}</p>
              <p class="section-card-description-year-of-release">${movie.Year}</p>
              <p class="section-card-description-imdb-rating">imdb : ${movie.imdbRating}</p>
            </div>
          </div>
      `;
  });
  ActionContainer.innerHTML = actionMoviesHTML;
}

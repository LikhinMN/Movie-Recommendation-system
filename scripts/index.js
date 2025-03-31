import { genres,category } from "../data/movie.js";
const Moviegrid = document.querySelector("#main-movie");
const categoryGrid=document.querySelector('.category-buttons-container')

const baseURL = 'https://api.themoviedb.org/3';
async function fetchActionMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28&sort_by=release_date.desc`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
fetchActionMovies();
function generatecategory(){
  let categoryHtml='';
  category.forEach((c)=>{
    categoryHtml+=
    `
      <button class="category-button" data-id="${c}">${c}</button>
    `
  })
  categoryGrid.innerHTML=categoryHtml;
}
generatecategory();
function generategrid() {
  let generategridHTML = "";
  genres.forEach((g) => {
    generategridHTML += `
    <section id="card">
        <div class="section-title"><h2>${g.name}</h2></div>
        <div class="section-card-container" data-id="${g.id}">
        </div>
    </section>
    `;
  });
  Moviegrid.innerHTML = generategridHTML;
}
generategrid();

const sectionContainer = document.querySelectorAll(".section-card-container");

async function GenerateSections(){
  sectionContainer.forEach(async(section) => {
    const sectionID=Number(section.dataset.id)
    let matchingId;
    genres.forEach((g)=>{
       if(g.id===sectionID){
        matchingId=g.id
       }
    })
    const movie=[];
  })
}
GenerateSections();
function generateMovie(movies, section) {
  let sectionMoviesHTML = ""; 
  movies.forEach((movie) => {
    sectionMoviesHTML += `
          <div class="section-card"${movie.imdbID}>
            <div class="section-image-container">
              <img src="${movie.Poster}" alt="${movie.Title}" />
            </div>
            <div class="section-card-description">
              <p class="section-card-description-title">${movie.Title}</p>
              <p class="section-card-description-year-of-release">${movie.Year}</p>
              <p class="section-card-description-imdb-rating">IMDB: ${movie.imdbRating || "N/A"}</p>
            </div>
          </div>
      `;
  });
  section.innerHTML = sectionMoviesHTML; 
}



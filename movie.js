let api="https://www.omdbapi.com/?i=tt3896198&apikey=686d2122&s="
let api_k="http://www.omdbapi.com/?apikey=686d2122&i="
let srch=document.getElementById("srch");
let tile=document.getElementsByClassName("tile")[0];

function serch(){
     console.log(srch.value);
    let query=srch.value
    if (query){
        getMovie(api+query)
    }
}

 async function getMovie(url){
    console.log(url)
    let res=await fetch(url); //
    let data=await res.json();
    console.log(data.Search);
   showMovies(data.Search);
}


function showMovies(movies){
    tile.innerHTML="";
    movies.forEach(async function(movie){
        let mData=await fetch(api_k+movie.imdbID);
        let mobj= await mData.json();
        console.log(mobj)
        mdisplay(mobj)
    })
}

function mdisplay(imovie){
    let melem=document.createElement("div")
    melem.classList.add("mcard")
    melem.innerHTML=`
    <div class="title">
    <div class="til">
    <img src="${imovie.Poster}" width="300px" height="300px"/>
    <br>
    <div class="desc">
    <p class="movie-title"><b>Title: </b><span class="value">${imovie.Title}</span></p>
    <p class="movie-title"><b>Rating: </b><span class="value">${imovie.imdbRating}</span></p> 
    <p class="movie-title"><b>Director: </b><span class="value">${imovie.Director}</span></p> 
    <p class="movie-title"><b>Released Date: </b><span class="value">${imovie. Released}</span></p>
    <p class="movie-title"><b>Genre: </b><span class="value">${imovie.Genre}</span></span>
    <p class="movie-title"><b>Language(s): </b><span class="value">${imovie.Language}</span></span>
    </div> 
    </div>
     </div> `
    tile.appendChild(melem)
}
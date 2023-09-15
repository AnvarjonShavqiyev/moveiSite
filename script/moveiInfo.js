const options = {
    method: 'GET',
    headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWI4MDA5YzViY2UyNmVmZjkxZGI2ZDJjOWZlNzk5NyIsInN1YiI6IjY1MDEzMWFhNmEyMjI3MDEzNzJkOWFjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zKREhNpuupm60W8qBNV_Bd32mn7VaSwV7yh2f5JRfw4'
    }
};

const movieImg = document.querySelector('.moveiImg')
const movieInfo = document.querySelector('.moveiInfo')
const moveiTitle = document.querySelector('.moveiTitle')
const rating = document.querySelector('.rating')
const movieDate = document.querySelector('.date')
const movieLanguage = document.querySelector('.language')
const backBtn = document.querySelector('.back')

let moveiId = localStorage.getItem('movieId')


fetch(`https://api.themoviedb.org/3/movie/${moveiId}`,options)
    .then(response => response.json())
    .then(data => renderInfo(data))

function renderInfo(data){
    console.log(data)
    img = document.createElement('img')
    img.src = 'https://image.tmdb.org/t/p/original/' + data.backdrop_path
    img.style = 'width: 989px;height: 532px;'
    movieImg.appendChild(img)
    moveiTitle.innerHTML = data.original_title
    movieInfo.innerHTML = data.overview
    rating.innerHTML = data.popularity
    movieLanguage.innerHTML =  `Language: ${data.original_language}`
    movieDate.innerHTML =  `Date: ${data.release_date}`
}

backBtn.addEventListener("click",()=>{
    localStorage.removeItem('movieId')
    window.location.replace("https://anvarjonshavqiyev.github.io/moveiSite/");

})

const options = {
    method: 'GET',
    headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWI4MDA5YzViY2UyNmVmZjkxZGI2ZDJjOWZlNzk5NyIsInN1YiI6IjY1MDEzMWFhNmEyMjI3MDEzNzJkOWFjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zKREhNpuupm60W8qBNV_Bd32mn7VaSwV7yh2f5JRfw4'
    }
};
const swiperWrapper = document.querySelector('.swiper-wrapper')
const hollywoodSwiper = document.querySelector('#hollywood')
const trendingSwiper = document.querySelector('#trending')
const topSwiper = document.querySelector('#top')
const cartoonsSwiper = document.querySelector('#cartoons')
const serialsSwiper = document.querySelector('#serials')
const hollywoodSection = document.querySelector('.hollywood')
const trendingSection = document.querySelector('.trending')
const topSection = document.querySelector('.top')
const serialsSection = document.querySelector('.serials')
const cartoonsSection = document.querySelector('.cartoons')


fetch('https://api.themoviedb.org/3/movie/top_rated?&with_networks=213',options)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(element => {
            let slide = document.createElement('div')
            let img = document.createElement('img')
            img.src = 'https://image.tmdb.org/t/p/original/' + element.backdrop_path
            img.style = 'height:574px;'
            slide.appendChild(img)
            slide.setAttribute('data-index',element.id)
            slide.className = 'swiper-slide'
            swiperWrapper.appendChild(slide)            
        });
})

fetch('https://api.themoviedb.org/3/discover/tv',options)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(element => {
            let slide = document.createElement('div')
            let img = document.createElement('img')
            img.style = 'width:100%;height:200px;margin-bottom:15px;'
            slide.style = 'width:150px;height:250px;background-color:rgba(255, 255, 255, 0);'
            let moveName = document.createElement('h3')
            moveName.innerHTML = element.name
            moveName.style = 'color:#fff; font-size:18px; font-family:"Khula'
            img.src = 'https://image.tmdb.org/t/p/original/' + element.backdrop_path
            slide.appendChild(img)
            slide.appendChild(moveName)
            slide.setAttribute('data-index',element.id)
            slide.className = 'swiper-slide'
            hollywoodSwiper.appendChild(slide)            
        });
})

fetch('https://api.themoviedb.org/3/discover/movie?&with_genres=28',options)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(element => {
            let slide = document.createElement('div')
            let img = document.createElement('img')
            img.style = 'width:100%;height:200px;margin-bottom:15px;'
            slide.style = 'width:150px;height:250px;background-color:rgba(255, 255, 255, 0);'
            let moveName = document.createElement('h3')
            moveName.innerHTML = element.title
            moveName.style = 'color:#fff; font-size:18px; font-family:"Khula'
            img.src = 'https://image.tmdb.org/t/p/original/' + element.backdrop_path
            slide.appendChild(img)
            slide.appendChild(moveName)
            slide.setAttribute('data-index',element.id)
            slide.className = 'swiper-slide'
            trendingSwiper.appendChild(slide)            
        });
})

fetch('https://api.themoviedb.org/3/discover/movie?&with_genres=12',options)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(element => {
            let slide = document.createElement('div')
            let img = document.createElement('img')
            img.style = 'width:100%;height:200px;margin-bottom:15px;'
            slide.style = 'width:150px;height:250px;background-color:rgba(255, 255, 255, 0);'
            let moveName = document.createElement('h3')
            moveName.innerHTML = element.title
            moveName.style = 'color:#fff; font-size:18px; font-family:"Khula'
            img.src = 'https://image.tmdb.org/t/p/original/' + element.backdrop_path
            slide.appendChild(img)
            slide.appendChild(moveName)
            slide.setAttribute('data-index',element.id)
            slide.className = 'swiper-slide'
            topSwiper.appendChild(slide)            
        });
})

fetch('https://api.themoviedb.org/3/discover/movie?&with_genres=35',options)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(element => {
            let slide = document.createElement('div')
            let img = document.createElement('img')
            img.style = 'width:100%;height:200px;margin-bottom:15px;'
            slide.style = 'width:150px;height:250px;background-color:rgba(255, 255, 255, 0);'
            let moveName = document.createElement('h3')
            moveName.innerHTML = element.title
            moveName.style = 'color:#fff; font-size:18px; font-family:"Khula'
            img.src = 'https://image.tmdb.org/t/p/original/' + element.backdrop_path
            slide.appendChild(img)
            slide.appendChild(moveName)
            slide.setAttribute('data-index',element.id)
            slide.className = 'swiper-slide'
            serialsSwiper.appendChild(slide)            
        });
})

fetch('https://api.themoviedb.org/3/discover/movie?&with_genres=16',options)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(element => {
            let slide = document.createElement('div')
            let img = document.createElement('img')
            img.style = 'width:100%;height:200px;margin-bottom:15px;'
            slide.style = 'width:150px;height:250px;background-color:rgba(255, 255, 255, 0);'
            let moveName = document.createElement('h3')
            moveName.innerHTML = element.title
            moveName.style = 'color:#fff; font-size:18px; font-family:"Khula'
            img.src = 'https://image.tmdb.org/t/p/original/' + element.backdrop_path
            slide.appendChild(img)
            slide.appendChild(moveName)
            slide.setAttribute('data-index',element.id)
            slide.className = 'swiper-slide'
            cartoonsSwiper.appendChild(slide)            
        });
})

document.body.addEventListener('click',(e)=>{
    e.preventDefault()
    if(e.target.closest('[data-index]')){
        localStorage.setItem('movieId',e.target.closest('[data-index]').dataset.index)
        window.location.replace(window.location.href + "/pages/moveInfo.html");
    }
})

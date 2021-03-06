import API_KEY from "./apikey.js";



let locationInput = document.querySelector('.location-input');
let searchBtn = document.querySelector('.search-btn');


let cityName = '';



const sendLocation = () => {
    console.log(locationInput.value);
    cityName = locationInput.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`, {mode: 'cors'})
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res);
        console.log(res.main.temp)
    })
    .catch(err => console.log(err))
    locationInput.value = '';
}



searchBtn.addEventListener('click',sendLocation);
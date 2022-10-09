const API_KEY = "31f9ef6039e815ae3df7aa2fc8e8acef"; 
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
const url =`https://api.openweathermap.org/data/2.5/weather?&units=metric&lat=${lat}&lon=${lng}&appid=${API_KEY}`;
fetch(url)
    .then(response => response.json())
    .then(wdata => {
        const weather = document.querySelector("#weatherData span:first-child");
        const city = document.querySelector("#weatherData span:last-child");
        console.log(wdata.name,wdata.weather[0].main);
        city.innerText = wdata.name;
        weather.innerText = `${wdata.main.temp}°C   ${wdata.weather[0].main}`;
});
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);


// https://api.openweathermap.org/data/2.5/weather?lat=37.40978&lon=126.8951943&appid=31f9ef6039e815ae3df7aa2fc8e8acef
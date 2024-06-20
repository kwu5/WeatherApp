

const container = document.querySelector(".container");

const onClickSearch =()=>{
    console.log(userInput.value);
    fetchWeatherData(userInput.value).then((data)=>processWeatherData(data));
}
const fetchWeatherData = async (userInput)=>{
    try{
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8f0cc715ca4d4964b11205201241906&q=${userInput}&aqi=no`);
        if(response.status == 200){
            let data = await response.json();
            return data;
        }else{
            return undefined;
        }
       
    }
    catch(err){
        alert("fetchWeatherData: Error", err);
    }
}
const headerSearch = document.querySelector(".header-search");
const userInput = document.querySelector("#userInput");
const btn_search = document.querySelector("#searchButton");
userInput.value = "San Francisco";
btn_search.addEventListener("click",onClickSearch);




const dataDisplay = document.querySelector(".dataDisplay");
let city = document.querySelector("#city");
let temp = document.querySelector("#temp");
let region = document.querySelector("#region");
let country = document.querySelector("#country");
let condition = document.querySelector("#condition");

const displayWeatherData = (city_d, temp_d, region_d, country_d, condition_d)=> {
    city.textContent = city_d;
    temp.textContent = temp_d + "°C";
    region.textContent = region_d;
    country.textContent = country_d;
    condition.textContent = condition_d;
}
const processWeatherData = (weatherData)=>{
    if(weatherData == undefined){
        alert("No such place found");
        return;
    }
    console.log(weatherData);
    const city_d = weatherData.location.name;
    const temp_d = weatherData.current.temp_c;
    const region_d = weatherData.location.region;
    const country_d = weatherData.location.country;
    const condition_d = weatherData.current.condition.text;
    displayWeatherData(city_d, temp_d, region_d, country_d, condition_d);
    
}

//default run
const setDefaultData = (city)=>{
    fetchWeatherData(city).then((data)=>processWeatherData(data));
}
setDefaultData('San Francisco');




const apiKey = '8f0cc715ca4d4964b11205201241906'
const container = document.querySelector(".container");

const onClickSearch =()=>{
    console.log(userInput.value);
    fetchWeatherData(userInput.value).then((data)=>processWeatherData(data));
}
const fetchWeatherData = async (userInput)=>{
    try{
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${userInput}&aqi=no`;
        let response = await fetch(url);

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

btn_search.addEventListener("click",onClickSearch);




const dataDisplay = document.querySelector(".dataDisplay");
let city = document.querySelector("#city");
let temp_data = document.querySelector("#temp_str");
let temp_img = document.querySelector("#temp_icon");
let region = document.querySelector("#region");
let country = document.querySelector("#country");
let condition = document.querySelector("#condition");

const displayWeatherData = (city_str, temp_str,temp_icon, region_str, country_str, condition_str)=> {
    city.textContent = city_str;
    temp_data.textContent = temp_str + "°C";
    temp_img.src = temp_icon;
    region.textContent = region_str;
    country.textContent = country_str;
    condition.textContent = condition_str;
}
const processWeatherData = (weatherData)=>{
    if(weatherData == undefined){
        alert("No such place found");
        return;
    }
    console.log(weatherData);
    const city_str = weatherData.location.name;
    const temp_str = weatherData.current.temp_c;
    const region_str = weatherData.location.region;
    const country_str = weatherData.location.country;
    const condition_str = weatherData.current.condition.text;
    const temp_icon = 'https:'+ weatherData.current.condition.icon;
    displayWeatherData(city_str, temp_str, temp_icon, region_str, country_str, condition_str);
    
}

//default 
const setDefaultData = (city)=>{
    fetchWeatherData(city).then((data)=>processWeatherData(data));
}
setDefaultData('San Francisco');




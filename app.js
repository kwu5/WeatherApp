


const onClickSearch =()=>{

    
    console.log(userInput.value);
    fetchWeatherData(userInput.value).then((data)=>processWeatherData(data));
    
}

const fetchWeatherData = async (userInput)=>{
    try{
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8f0cc715ca4d4964b11205201241906&q=${userInput}&aqi=no`);
        let data = await response.json();
        return data;
    }
    catch(err){
        alert("fetchWeatherData: Error", err);
        return null;
    }
}

const processWeatherData = (WeatherData)=>{

    console.log(WeatherData);
    
}


//----------------------------------------------




const container = document.querySelector(".container");
const headerSearch = document.querySelector(".header-search");
const dataDisplay = document.querySelector(".dataDisplay");

const userInput = document.querySelector("#userInput");
const btn_search = document.querySelector("#searchButton");

userInput.value = "San Francisco";
btn_search.addEventListener("click",onClickSearch);







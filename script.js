const city_input= document.getElementById("city-input");
const search_btnn= document.getElementById("search-btn");
const cityname= document.getElementById("city-name");
const temperature= document.getElementById("temp");
const description= document.getElementById("description");
const weatherdetails= document.getElementById("weather-details");
const humidity= document.getElementById("humidity");
const error= document.getElementById("error");
const API_KEY="532379257901cc3f2f45528b1adbce1b"

async function twice_work(){
const city__name = city_input.value.trim();
if(!city__name) return;

try {
const data= await fetch_data(city__name);
display(data);
} catch (error) {
    displayerror(error);
}


city_input.value="";
}




search_btnn.addEventListener("click", twice_work)


city_input.addEventListener("keydown", function(event){
if(event.key== "Enter"){
    twice_work();
}
})

async function fetch_data(city){
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
`

const response= await fetch(url);

if(!response.ok){
    throw new Error("city not found 404");
    
}
const Data= await response.json();
return Data;

}


function display(data){


    
    const {name, main, weather}= data;

    weatherdetails.classList.remove("hidden");
    cityname.textContent= name;
    temperature.textContent= `"temp:"${main.temp}`;
    humidity.textContent= `'humidity:'${main.humidity}`;
    description.textContent=`'description:' ${ weather[0].description}`;



}

function displayerror(err){
    error.classList.remove("hidden");
error.textContent=`${err}`;
}
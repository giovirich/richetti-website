// const searchZip = document.getElementById("search");
// searchZip.addEventListener("click", getWeather);

// function getWeather(){
//     let zip = document.getElementById("zip").value;
//     let units = "imperial";
//     const apiUrl = "http://api.openweathermap.org/data/2.5/weather";
//     const apiKey = "a262f151689742b05f110acd5ff70773";
//     let queryString = `${apiUrl}?zip=${zip}&units=${units}&appid=${apiKey}`;

//     let xhr = new XMLHttpRequest();
//     xhr.addEventListener("load", receivedResponse);
//     xhr.responseType = "json";
//     xhr.open("GET", queryString);
//     xhr.send();
    
// }

// function receivedResponse(){
//     if(this.status !== 200){
//         alert("Error making the http request");
//     }
//     let forecast = document.getElementById("forecast");
//     let jsonData = this.response;
//     console.log(jsonData);
//     console.log(jsonData.name);
//     forecast.innerHTML =
//     "<h1>The weather in " + this.response.name + " is the following:</h1>" +
//     "<p>Current temperature: " + "<strong>" + this.response.main.temp + " &deg;F</strong></p>" +
//     "<p>We're having " + "<strong>" + this.response.weather[0].description.toUpperCase() + "</strong></p>" +
//     "<p>Humidity: " + "<strong>" + this.response.main.humidity + "%</strong></p>";
// }

let url = "https://api.worldbank.org/v2/country?format=json&per_page=300";
const xhr = new XMLHttpRequest();
let country = "Panama";
xhr.addEventListener("load", function(){
    const result = getCountryByName(this.response, country);
    console.log(result);
});

xhr.responseType = "json";
xhr.open("GET", url);
xhr.send();



function getCountryByName(data, targetName){
    try {
        const countries = data[1];
        const match = countries.find(c => c.name.toLowerCase() === targetName.toLowerCase());

        if(xhr.status !== 200){
            throw new Error("Could not fetch country");
        }
        return {name: match.name, capital: match.capitalCity, region: match.region.value,
            income: match.incomeLevel.value, code: match.iso2Code, latitude: match.latitude, longitude: match.longitude}

    } catch (err) {
        console.error(err);
    }
}









    
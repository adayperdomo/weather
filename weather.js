"use strict"

document.getElementById("search-button").addEventListener("click",consultarAPI)


function consultarAPI(){
    let xhr, city, apiKey, url;

    city = document.getElementById("place-input").value;
    apiKey = "9010d26f18a0a410485c4ced25a229a2"
    url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
    xhr = new XMLHttpRequest();
    xhr.onload = function(){
        mostrarInformacion(this);
    }
    xhr.open("GET", url);
    xhr.send();

}

function mostrarInformacion(xhr){
    let obj,city,temp, weatherDescription, country,icon, codigoHTML;
    obj = JSON.parse(xhr.responseText)
    city = obj.name;
    console.log(city);
    temp = String(Math.round(obj.main.temp));
    console.log(temp)
    weatherDescription = obj.weather[0].description
    console.log(weatherDescription)
    country = obj.sys.country
    console.log(country)
    icon = "https://openweathermap.org/img/wn/" + obj.weather[0].icon + "@2x.png"
    console.log(icon)

    codigoHTML ="<div class='card'>" +
                    "<h2 class='city-name'>"+ city + "<sup>"+ country + "</sup></h2>" +
                    "<p class='city-temp'>"+ temp + "<sup>ºC</sup></p>" +
                    "<figure>" +
                        "<img src=" + icon + ">" +
                        "<figcaption>"+ weatherDescription +"</figcaption>" +
                    "</figure>" +
                "</div>";
    

    // document.getElementById("msg").innerHTML += ""
    document.getElementById("cards").innerHTML += codigoHTML
}
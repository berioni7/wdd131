document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

let temperature = -5;  
let windSpeed = 50;
let condition= "Snowy";

function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10 && windSpeed > 4.8)) {
        let windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
        return windChill.toFixed(1);  
    } else {
        return "N/A";  
    }
}

function displayWeather() {
    let windChill = calculateWindChill(temperature, windSpeed);
    document.querySelector(".weather .p1 p:nth-child(1)").textContent = `Temperature:  ${ temperature}°C`;
    document.querySelector(".weather .p1 p:nth-child(2)").textContent = `Conditions:  ${ condition}`;
    document.querySelector(".weather .p1 p:nth-child(3)").textContent = `Wind:  ${ windSpeed} km/h`;
    document.querySelector(".weather .p1 p:nth-child(4)").textContent = `Wind Chill:  ${ windChill}°C`;
}

window.onload = displayWeather;
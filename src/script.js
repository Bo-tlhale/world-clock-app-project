function updateTime(){
//Sao Paulo
    let saoPauloElement = document.querySelector("#sao-paulo");
    if(saoPauloElement){
    let saoPauloDateElement = saoPauloElement.querySelector(".date");
    let saoPauloTimeElement = saoPauloElement.querySelector(".time");
    let saoPauloTime = moment().tz('America/Sao_Paulo');
    saoPauloDateElement.innerHTML = saoPauloTime.format("MMMM Do YYYY");
    saoPauloTimeElement.innerHTML = `${saoPauloTime.format('h:mm:ss [<small>]A[</small>]')}`;
}
//Seoul

let seoulElement = document.querySelector("#seoul");
if(seoulElement){
let seoulDateElement = seoulElement.querySelector(".date");
let seoulTimeElement = seoulElement.querySelector(".time");
let seoulTime = moment().tz('Asia/Seoul');
seoulDateElement.innerHTML = seoulTime.format("MMMM Do YYYY");
seoulTimeElement.innerHTML = `${seoulTime.format('h:mm:ss [<small>]A[</small>]')}`;
}

//Stockholm

let stockholmElement = document.querySelector("#stockholm");
if(stockholmElement){
let stockholmDateElement = stockholmElement.querySelector(".date");
let stockholmTimeElement = stockholmElement.querySelector(".time");
let stockholmTime = moment().tz('Europe/Stockholm');
stockholmDateElement.innerHTML = stockholmTime.format("MMMM Do YYYY");
stockholmTimeElement.innerHTML = `${stockholmTime.format('h:mm:ss [<small>]A[</small>]')}`;
}

}

function updateCity(event){
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
            <div class="time">${cityTime.format('h:mm:ss [<small>]A[</small>]')}</div>
    </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

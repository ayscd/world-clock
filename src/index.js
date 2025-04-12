 function updateRioJaneiro() {
    let rio = document.querySelector("#rio-janeiro");
    let rioDate = rio.querySelector(".date");
    let rioTime = rio.querySelector(".time");
    let rioTZ = moment().tz("America/Sao_Paulo");

    rioDate.innerHTML = rioTZ.format(`MMMM Do, YYYY`);
    rioTime.innerHTML = rioTZ.format(`hh:mm:ss [<small>]A[</small>]`);  
}

function updateSaoPaulo() {
    let saoPaulo = document.querySelector("#sao-paulo");
   let saoPauloDate = saoPaulo.querySelector(".date");
    let saoPauloTime = saoPaulo.querySelector(".time");
    let saoPauloTZ = moment().tz("America/Sao_Paulo");

    saoPauloDate.innerHTML = saoPauloTZ.format(`MMMM Do, YYYY`);
    saoPauloTime.innerHTML = saoPauloTZ.format(`hh:mm:ss [<small>]A[</small>]`);
}

function updateTime() {
    updateRioJaneiro();
    updateSaoPaulo();
}

function updateCity(event) {
    const cityToTZ = {
        "sydney": "Australia/Sydney",
        "moscow": "Europe/Moscow",
        "berlin": "Europe/Berlin",
        "vatican": "Europe/Vatican",
        "new-york": "America/New_York",
    }

    let city = event.target.value;
    let cityTimeZone = cityToTZ[city];
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let cities = document.querySelector("#cities");
    cities.innerHTML = `
    <div class="city">
        <span>
            <h2>${cityName}</h2>
            <p class="date">${cityTime.format(`MMMM Do, YYYY`)}</p>
        </span>
        <div class="time">${cityTime.format(`hh:mm:ss [<small>]A[</small>]`)}</div>
    </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#choose-city");
citySelect.addEventListener("change", updateCity);
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
        "salvador": "America/Sao_Paulo",
        "rio-branco": "America/Rio_Branco",
        "belo-horizonte": "America/Sao_Paulo",
        "cuiaba": "America/Cuiaba",
        "fernando-noronha": "America/Noronha",
    }

    let city = event.target.value;
    let cityTimeZone = cityToTZ[city];
    let cityTime = moment().tz(cityTimeZone);
    let cities = document.querySelector("#cities");
    cities.innerHTML = cityTimeZone;
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#choose-city");
citySelect.addEventListener("change", updateCity);
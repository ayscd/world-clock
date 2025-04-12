function updateRioJaneiro() {
    let rio = document.querySelector("#rio-janeiro");
    let rioDate = rio.querySelector(".date");
    let rioTime = rio.querySelector(".time");
    let rioTZ = moment().tz("America/Sao_Paulo");

    rioDate.innerHTML = rioTZ.format(`MMMM Do, YYYY`);
    rioTime.innerHTML = rioTZ.format(`hh:mm:ss [<small>]A[</small>]`);  
}

function updateParis() {
    let paris = document.querySelector("#paris");
    let parisDate = paris.querySelector(".date");
    let parisTime = paris.querySelector(".time");
    let parisTZ = moment().tz("Europe/Paris");

    parisDate.innerHTML = parisTZ.format(`MMMM Do, YYYY`);
    parisTime.innerHTML = parisTZ.format(`hh:mm:ss [<small>]A[</small>]`);
}

function updateCuracao() {
    let curacao = document.querySelector("#curacao");
    let curacaoDate = curacao.querySelector(".date");
    let curacaoTime = curacao.querySelector(".time");
    let curacaoTZ = moment().tz("America/Curacao");

    curacaoDate.innerHTML = curacaoTZ.format(`MMMM Do, YYYY`);
    curacaoTime.innerHTML = curacaoTZ.format(`hh:mm:ss [<small>]A[</small>]`);
}

function updateTime() {
    updateRioJaneiro();
    updateParis();
    updateCuracao();
}   

function updateCity(event) {
    const cityToTZ = {
        "current": "America/Sao_Paulo",
        "sydney": "Australia/Sydney",
        "moscow": "Europe/Moscow",
        "berlin": "Europe/Berlin",
        "vatican": "Europe/Vatican",
        "new-york": "America/New_York",
    }

    let city = event.target.value;
    let cityTimeZone = cityToTZ[city];
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
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
    </div>`;

    let button = document.querySelector("#refresh");
    button.classList.remove("hidden");
    button.addEventListener("click", function() {
        location.reload();
    });
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#choose-city");
citySelect.addEventListener("change", updateCity);

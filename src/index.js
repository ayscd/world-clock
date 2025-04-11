function updateBrasilia() {
    let brasilia = document.querySelector("#brasilia");
    let brasiliaDate = brasilia.querySelector(".date");
    let brasiliaTime = brasilia.querySelector(".time");
    let brasiliaTZ = moment().tz("America/Sao_Paulo");

    brasiliaDate.innerHTML = brasiliaTZ.format(`MMMM Do, YYYY`);
    brasiliaTime.innerHTML = brasiliaTZ.format(`hh:mm:ss [<small>]A[</small>]`);
}


function updateRioBranco() {
    let rioBranco = document.querySelector("#rio-branco");
    let rioBrancoDate = rioBranco.querySelector(".date");
    let rioBrancoTime = rioBranco.querySelector(".time");
    let rioBrancoTZ = moment().tz("America/Rio_Branco");

    rioBrancoDate.innerHTML = rioBrancoTZ.format(`MMMM Do, YYYY`);
    rioBrancoTime.innerHTML = rioBrancoTZ.format(`hh:mm:ss [<small>]A[</small>]`);
}

function updateTime() {
    updateRioBranco();
    updateBrasilia();
}

updateTime();
setInterval(updateTime, 1000);
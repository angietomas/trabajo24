
const equipo1 = ["Celeste", "Michelle", "Ariana", "Angie"]
let lista = "";

for (let i = 0; i < equipo1.length; i++){
    lista += `<li>${equipo1[i]}</li>`;
}

document.getElementById("integrantes").innerHTML = `<ul>${lista}</ul>`;
document.getElementById("lider").innerText = equipo1[1]
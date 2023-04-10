function corumsecum(){
    document.getElementById("Grifinoria").style.backgroundColor='#ca0000';
}

function cordoissecum(){
    document.getElementById("Grifinoria").style.backgroundColor='#AE0001';
}

function corumsecum1(){
    document.getElementById("Lufa-Lufa").style.backgroundColor='#ecb939';
}

function cordoissecum1(){
    document.getElementById("Lufa-Lufa").style.backgroundColor='#eeb117';
}

function corumsecum2(){
    document.getElementById("Corvinal").style.backgroundColor='#364e9c';
}

function cordoissecum2(){
    document.getElementById("Corvinal").style.backgroundColor='#222f5b';
}

function corumsecum3(){
    document.getElementById("Sonserina").style.backgroundColor='#3bac61';
}

function cordoissecum3(){
    document.getElementById("Sonserina").style.backgroundColor='#2a623d';
}


function cores(sla){

}




var casas1 = ["Grifinória", " Lufa-Lufa", " Corvinal", " Sonserina"];


function gerarCasa() {
    var casas = ["Grifinória", "Lufa-Lufa", "Corvinal", "Sonserina"];
    var sorteioCasa = Math.floor(Math.random() * casas.length);
    var casa = casas[sorteioCasa];
    alert("Sua casa é " + casa + "!");
    // var casa = casas[Math.floor(Math.random() * casas.length)];
    // document.getElementById("gerarCasa").innerHTML = "onclick='alert('Sua casa é " + casa + "!')'"
}

function minhaFuncao() {
    var casitas = document.getElementById("casitas");
    casitas.innerHTML = casas1;
}

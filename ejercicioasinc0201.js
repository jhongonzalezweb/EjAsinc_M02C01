
function mostarEdad() {

    var edadUsuario = 35 //prompt('¿Cuál es tu edad?');
    
    var edadMaxima = edadUsuario * 365
    
    return edadMaxima
}

var edadMax = mostarEdad();

document.getElementById("edadspan").innerHTML = edadMax;

var edadMax2 = edadMax;

var snack = "Doritos"

var restoDeVida = (65*365)

var snackPorDias = 2

function estimando() {


    var necesitas = restoDeVida * snackPorDias

    var res = "Necesitarás " + necesitas + " " + snack + " para que te alcancen hasta los siguientes " + restoDeVida / 365 + " años."

    return res

}

var mostrarSnacks = estimando();

document.getElementById("edadspan2").innerHTML = mostrarSnacks;

function gastoCalculo() {

    var precio = 890;
    
    var gastoDinero = restoDeVida * snackPorDias * precio;
    
    return "Te queda por gastar $" + gastoDinero + " en los siguientes " + restoDeVida / 365 + "años con un precio de " + precio 
}


var gastoDinero = gastoCalculo();

document.getElementById("edadspan3").innerHTML = gastoDinero;

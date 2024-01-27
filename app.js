let numeroSecreto = generarNumeroSecreto();

let intentos = 1;

let listadoNumerosSorteados = [];
 
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento( ) {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroSecreto));
    //console.log (numeroSecreto);
    //console.log(typeof(numeroDeUsuario));
    //console.log (numeroDeUsuario);
    //console.log (numeroDeUsuario===numeroSecreto);
    if (numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos==1) ? 'vez' : 'veces'}`);
       
       document.getElementById ('reiniciar').removeAttribute('disabled');
    

    } else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número es menor');
            }   else {(asignarTextoElemento('p', 'El número es mayor'));
            }
            intentos++;
            limpiarCaja();
        }
    return;
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log(listadoNumerosSorteados);

    //si ya sorteamos todos los numeros
    if (listadoNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero generado esta en la lista
        if (listadoNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listadoNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = ''
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute ('disabled','true');
}

condicionesIniciales();
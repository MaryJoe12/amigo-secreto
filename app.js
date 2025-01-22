let lista= [];
let elemento = document.getElementById('listaAmigos');
function agregarAmigo(){
    let nombre= document.getElementById('amigo').value;
    if (!(nombre.trim() === "")){
        lista.push(nombre);
        agregar(nombre, elemento);
    }else{
        alert("Por favor, ingreese un nombre valido")
    }
}

function sortearAmigo(){
    const elementos = elemento.getElementsByTagName('li');
    const elementosLista= Array.from(elementos);
    let numeroGenerado =  Math.floor(Math.random()*elementosLista.length);
    let sorteo = document.getElementById('resultado');
    agregar("El amigo secreto sorteado es: "+ elementosLista[numeroGenerado].textContent, sorteo);
    elemento.style.display = 'none';

}

function agregar(nombre, donde){
    const nuevo = document.createElement('li');
    nuevo.textContent= nombre;
    donde.appendChild(nuevo);
}
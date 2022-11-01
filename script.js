//let elH1 = document.querySelector('h1');

//console.log(elH1);

//let elContenedor = document.querySelector('.contenedor'); //retorna un solo elemento
//console.log(elContenedor);

//let parrafos = document.querySelectorAll('p'); //retornar varios elementos que coinciden con ese selector.
//console.log(parrafos);

//for (const unParrafo of parrafos) {
    //console.log(unParrafo);
//}

// caoturar etiquetas dentro del elemento.

// let strong = document.querySelector('.parrafo-especial strong');
// lo que esto hace es buscar dentro de la etiqueta del parrafo donde se encuentra la etiqueta strong

function modOscuro (){
    document.querySelector("body").classList.toggle("dark");
}
console.log('Que tal');

function dos() {
    console.log(2)
}

function cambiarTitulo() {
    const etiquetaTitulo = document.getElementById('titulo');
    etiquetaTitulo.onmouseenter = undefined;
    etiquetaTitulo.innerText = 'Adios Mundo';
    etiquetaTitulo.className = 'cafe';
}

function elimarEventOnMouseEnterOnBoton() {
    const etieutaBotonTitulo = document.getElementById('boton_titulo');
    etieutaBotonTitulo.onmouseenter = undefined;
}

function crearContenido() {
    const etiquetaContenido = document.getElementById('contenido');

    const elemntotitulo = document.createElement('h5');
    elemntotitulo.className = 'card-title';
    elemntotitulo.textContent = 'Titulo';

    const elemntoParrafo = document.createElement('p');
    elemntoParrafo.className = 'card-text';
    elemntoParrafo.textContent = 'Contenido';

    const elementoBoton = document.createElement('button');
    elementoBoton.className = 'btn btn-primary';
    elementoBoton.textContent = 'Accion';

    const contendorCardBoby = document.createElement('div');
    contendorCardBoby.className = 'card-body';
    contendorCardBoby.appendChild(elemntotitulo);
    contendorCardBoby.appendChild(elemntoParrafo);
    contendorCardBoby.appendChild(elementoBoton);

    const etiquetaImagen = document.createElement('img');
    etiquetaImagen.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvMD34k0ZG6Mtf7OfZMcA-8TlQ_vy1lbxlUicFio6a4RJE55w4w';
    etiquetaImagen.className = 'card-img-top';
    etiquetaImagen.alt = 'Imagen';

    const etiquetCarta = document.createElement('div');
    etiquetCarta.className = 'card';
    etiquetCarta.appendChild(etiquetaImagen);
    etiquetCarta.appendChild(contendorCardBoby);

    etiquetaContenido.appendChild(etiquetCarta);
}

function traerPost(idPost: number) {

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            const post = JSON.parse(this.responseText);
            console.log(post);
            console.log(post.userId);
        }
    };

    xhttp.open("GET","https://jsonplaceholder.typicode.com/posts/" + idPost,true);
    xhttp.send();
}
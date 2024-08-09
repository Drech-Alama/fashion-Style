// Crea un arreglo con las rutas de las imágenes que se van a mostrar
const imagenes = [
    "img/otoño1.jpg",
    "img/otoño2.jpg",
    "img/otoño3.jpg",
    "img/otoño4.jpg",
    "img/otoño5.jpg",
    "img/otoño6.jpg"
];

// Obtiene el elemento HTML con id "aboutImage" (el lugar donde se mostrarán las imágenes)
const elementoImagen = document.getElementById('IdImagen');

// Define una variable para llevar la cuenta de cuál imagen se está mostrando
let indiceImagen = 0;

// Función que cambia la imagen
function cambiarImagenesConWhile() {
    // Cambia la imagen en el elemento HTML al valor de la imagen en el índice actual
    elementoImagen.src = imagenes[indiceImagen];
    
    // Después de mostrar la imagen, aumenta el índice en 1 para la próxima imagen
    indiceImagen++;
    
    // Si el índice llega al final de la lista de imágenes, reinicia a 0
    if (indiceImagen >= imagenes.length) {
        indiceImagen = 0; // Reinicia a la primera imagen si llegamos al final
    }
    
    // Llama a esta misma función otra vez después de 5 segundos
    setTimeout(cambiarImagenesConWhile, 5000); // Espera 5 segundos y vuelve a ejecutar la función
}

// Inicia el bucle de cambio de imágenes
cambiarImagenesConWhile();
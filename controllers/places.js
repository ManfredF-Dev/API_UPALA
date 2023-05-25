const {
    request,
    response
} = require('express');


const Lugares = require('../models/lugares');


// const places = [
//     {
//         nombre: "Laberinto katira",
//         descripcion : "Si te gustan los retos y las cosas diferentes este es un lugar.",
//         url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/d9/3a/3f/laberinto-de-katira.jpg?w=1200&h=-1&s=1",
//         direccion: "123 Calle Principal, Ciudad"
//     },
//     {
//         nombre: "Catarata SANTUARIO - DOS RIOS",
//         descripcion : "Catarata el Santuario se ubica en El Gavilán de Upala, también se le conoce como la catarata La Catedral.",
//         url: "https://monteverdetourscr.com/wp-content/uploads/2019/08/Cathedral-Waterfall-Costa-Rica-1.jpg",
//         direccion: "456 Calle Secundaria, Ciudad"
//     },
//     {
//         nombre: "Río Celeste - Volcán Tenorio",
//         descripcion : "El color del río Celeste, rodeado de un exuberante bosque, ofrece un impresionante paisaje digno de conocer y de admirar.",
//         url: "https://aztecatours.com/wp-content/uploads/2022/11/Rio-Celeste.jpeg",
//         direccion: "789 Calle Terciaria, Ciudad"
//     },
//     {
//         nombre: "Catarata - BIJAGUA",
//         descripcion : "Caminata de aventura donde se aprecia el bosque nuboso, el bosque de transición y el bosque pluvial pre-montano. La vista a las cataratas es muy hermosa, con aguas cristalinas, las cuales invitan a disfrutar de ellas.",
//         url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/15/cd/fb/catarata.jpg?w=1200&h=-1&s=1",
//         direccion: "789 Calle Terciaria, Ciudad"
//     }


// ];



const placesGET = async (req = request, res = response) => {
    //GET
    try {
        res.json(await Lugares.find());

    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    placesGET
}
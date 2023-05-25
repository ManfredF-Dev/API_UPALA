//Necesitamos recuperar un Schema y un modelo de Moongose
const {
    Schema,
    model
} = require('mongoose');

const SchemaUser = new Schema({
    
    nombre: {
        type: String
    },

    descripcion: {
        type: String
    },

    url: {
        type: String
    },


    direccion: {
        type: String
    },
});


//Creamos un metodo sobre escrito para devolver el lugar pero
//con menos valores de los que se necesita para comprobar que lo
//registramos 
SchemaUser.methods.toJSON = function () {
    const {
        __v,
        ...user
    } = this.toObject();
    return user;
};
module.exports = model('lugares', SchemaUser);
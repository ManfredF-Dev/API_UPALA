const express = require('express');
require('dotenv').config();
const cors = require('cors');
const MongoDBConection = require('../database/mongo');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/home';

        //invocamos nuestros metodos
        this.middleWares();
        this.Cors();
        this.routes();
        this.MongoDBConect();
    }




    listen() {
        this.app.listen(this.port, () => {
            console.log(`El servidor esta corriendo en el puerto ${this.port}`);
        });
    }


    routes() {
        this.app.use(this.usersPath, require('../routes/routes'));
    }

    middleWares() {
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    MongoDBConect() {
        MongoDBConection();
    }

    Cors(){
        this.app.use(cors()); //Middleware

    }


}



module.exports = Server;
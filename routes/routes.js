const {
    Router
} = require('express');

const {
    placesGET
} = require('../controllers/places');


const router = Router();

router.get('/', placesGET);

module.exports = router;
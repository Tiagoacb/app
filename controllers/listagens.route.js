const pat = require('../models/patrocinador.model');
const sep = require('../models/speaker.model');
const col = require('../models/colaborador.model');
const ses = require('../models/sessoes.model');

const express = require('express');
const router = express.Router();

router.get('/', function(request, response){
 pat.list(function(patrocinador){
		response.set("Content-Type", "text/html");
		response.render('listagens-backend', {
			patrocinadores: patrocinador
			})
		})
});

module.exports = router;

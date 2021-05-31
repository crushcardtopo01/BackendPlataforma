const db = require('../../models');
const dispositivo = db.Dispositivo;
const jwt = require('jsonwebtoken');
const moment = require('moment');



const indice = async (req, res) => {
	const dispositivos = await dispositivo.findAll();
	return res.status(200).send({ data: dispositivos });
};

const guardar = async (req, res) => {

    const _dispositivo = await dispositivo.create({
		nombre: req.body.nombre,
		usuario_id: req.body.usuario_id,
		fecha_hora_creacion: moment().format('YYYY-MM-DD HH:mm:ss'),
		//cadena: funciones.cadenaAleatoria()
	});

    const token =  jwt.sign({
        device_id: _dispositivo.id
    },process.env.JWT_KEY_MQTT);

    _dispositivo.token = token;
	_dispositivo.save();

    return res.status(201).send({ data:_dispositivo });

	/*const _dispositivo = await dispositivo.create({
		nombre: req.body.nombre,
		usuario_id: req.user.id,
		fecha_hora_creacion: moment().format('YYYY-MM-DD HH:mm:ss'),
		cadena: funciones.cadenaAleatoria()
	});

	const token = jwt.sign({
		device_id: _dispositivo.id
	}, process.env.JWT_KEY_MQTT); //ALGORITMO HS256

	_dispositivo.token = token;
	_dispositivo.save();

	//return res.status(400).send({ message: 'Dispositivo desactivado' });

	//req.query -- OBTENER VARIABLES POR URL
	//req.body -- OBTENER VARIABLES POR FORMULARIOS
	res.status(201).send({ "message": "Dispositivo guardado" });

    */
};

const mostrar =  async(req, res) => {

    const _dispositivo = await dispositivo.findByPk(req.params.id);
    console.log(_dispositivo);
    return res.status(200).send({ data: _dispositivo });
};



const actualizar = async (req, res) => {
	const _dispositivo = await dispositivo.findByPk(req.params.id);
	_dispositivo.update(req.body);
	if(typeof req.body.activo != 'undefined'){
		if (req.body.activo) {
			return res.status(200).send({ message: 'Dispositivo activado' });
		} else {
			return res.status(200).send({ message: 'Dispositivo desactivado' });
		}
	}
	return res.status(200).send({ message: 'Dispositivo actualizado' });
};

module.exports = { indice, guardar, mostrar, actualizar };

const db = require ('../../models');
const user = db.Usuario;
const moment = require ('moment');
const bcrypt = require ('bcrypt');

const indice = async (req,res) => {

    const users = await user.findAll();
    return res.status(200).send({"data": users});

};

const create = async (req,res) => {
    const rounds = 10;
    await bcrypt.genSalt(rounds, async (err, salt) => {
		await bcrypt.hash(req.body.contrasena, salt, async (err, hash) => {
			await user.create({
				nombre: req.body.nombre,
				correo_electronico: req.body.correo_electronico,
				contrasena: hash,
				fecha_hora_creacion: moment().format('YYYY-MM-DD HH:mm:ss')
			});
		});
	});

    return res.status(201).send({message:'usuario creado'});

};

const update = async (req, res) => {
	const _user = await user.findByPk(req.params.id);
	_user.update(req.body);
	if (typeof req.body.activo != 'undefined') {
		if (req.body.activo) {
			return res.status(200).send({ message: 'Usuario activado' });
		} else {
			return res.status(200).send({ message: 'Usuario desactivado' });
		}
	}
	return res.status(200).send({ message: 'Usuario actualizado' });
};


module.exports = {indice, create, update };
const router = require ("express").Router();
const dispositivos = require("../controllers/catalogos/dispositivos");
const usuarios = require("../controllers/catalogos/usuarios");


router.get('/api/catalogos/dispositivos', dispositivos.indice);
router.post('/api/catalogos/dispositivos', dispositivos.guardar);
router.get('/api/catalogos/dispositivos/:id', dispositivos.mostrar);
router.put('/api/catalogos/dispositivos/:id', dispositivos.actualizar);

router.get('/api/catalogos/usuarios', usuarios.indice);
router.post('/api/catalogos/usuarios', usuarios.create);
router.put('/api/catalogos/usuarios/:id', usuarios.update);


module.exports = router;
const Router = require('koa-router');
const jwtMiddleware = require('koa-jwt');
// const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
const usuarios = require('./routes/usuarios.js');
const jugadors = require('./routes/jugadors.js');
const asignar_turnos = require('./routes/asignar_turnos.js');
const actualizar_turno = require('./routes/actualizar_turno.js');
const tirar_dados = require('./routes/tirar_dados.js');
const casillas_libres = require('./routes/casillas_libres.js');
// const manejo_casilas = require('./routes/manejo_casillas.js');
const authRoutes = require('./routes/authentication.js');
const scopeProtectedRoutes = require('./routes/scopeExample.js');

dotenv.config();
const router = new Router();

// router.use('/tableros', tableros.routes());
// router.use('/propiedads', propiedads.routes());
// router.use('/libres', libres.routes());
// router.use('/juegos', juegos.routes());
// router.use('/casillas', casillas.routes());
router.use('/jugadors', jugadors.routes());
router.use('/asignar_turnos', asignar_turnos.routes());
router.use('/actualizar_turno', actualizar_turno.routes());
router.use('/tirar_dados', tirar_dados.routes());
router.use('/casillas_libres', casillas_libres.routes());
// router.use('/manejo_casillas', manejo_casilas.routes());
router.use(authRoutes.routes());
router.use('/usuarios', usuarios.routes());

// Desde aca toda las rutas requieren JWT. No aplica para las lineas de antes
router.use(jwtMiddleware({ secret: process.env.JWT_SECRET }));

router.use('/scope-example', scopeProtectedRoutes.routes());

module.exports = router;

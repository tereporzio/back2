// const Router = require('koa-router');
// const router = new Router();
// // Importar los modelos necesarios

// const { Casilla, Propiedad, Jugador } = require('../models');

// router.post("manejo_casillas","/:idJugador", async (ctx) => {

//   try {
//     const idCasilla = parseInt(ctx.request.body.idCasilla);
//     const idJugador = parseInt(ctx.params.idJugador);
//     ctx.body = { message: `El jugador ${idJugador} maneja la casilla ${idCasilla}` };
//     const jugador = await Jugador.findOne({
//       where: {
//         id: idJugador,
//       },
//     });

//     if (!jugador) {
//       throw new Error('No se encontró el jugador');
//     }

//     const ficha = jugador.ficha;
//     const casilla = await Casilla.findOne({
//       where: {
//         id: idCasilla,
//       },
//     });

//     if (!casilla) {
//         throw new Error('No se encontró la casilla');
//       }
//     const propiedad =  await Propiedad.findOne({
//       where: {
//         idCasilla: casilla.id,
//       },
//     });

//     if (casilla.id === propiedad.idCasilla) {
//       console.log("entramos");
//       console.log(propiedad.idJugador);

//         if (propiedad.idJugador === null) {
//           console.log("a comprar");

//           if (jugador.dinero >= propiedad.precio) {

//             console.log("compramos");

//             // El jugador tiene suficiente dinero para comprar la propiedad

//             propiedad.idJugador = jugador.id;

//             jugador.dinero -= propiedad.precio;

//             await propiedad.save();

//             await jugador.save();

//             ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };

//             console.log(jugador.dinero);

//           }

//         }

//     }

//   } catch (error) {
//     console.log("kihubo");
//     ctx.body = { error: error.message };
//   }
// });

// module.exports = router;

const Router = require('koa-router');

const router = new Router();

// Importar los modelos necesarios
const {
  Casilla, Propiedad, Jugador, Libre,
} = require('../models');
// const Casilla = require('../casilla.js');
// const Propiedad = require('../propiedad.js');
// const Libre = require('../libre.js');
// const Jugador = require('../jugadors.js');
router.post('casillas_libres', '/:idJugador', async (ctx) => {
// Endpoint para manejar una casilla específica

  try {
    const idCasilla = parseInt(ctx.request.body.idCasilla);
    const idJugador = parseInt(ctx.params.idJugador);
    ctx.body = { message: `El jugador ${idJugador} maneja la casilla ${idCasilla}` };
    const jugador = await Jugador.findOne({
      where: {
        id: idJugador,
      },
    });

    if (!jugador) {
      throw new Error('No se encontró el jugador');
    }

    const casilla = await Casilla.findOne({
      where: {
        id: idCasilla,
      },
    });

    if (!casilla) {
      throw new Error('No se encontró la casilla');
    }

    const libre = await Libre.findOne({
      where: {
        idCasilla: casilla.id,
      },
    });

    const propiedad = await Propiedad.findOne({
      where: {
        idCasilla: casilla.id,
      },
    });

    // if (casilla.id === (1 || 2 || 4 || 6 || 7 || 9 || 10 || 11 || 13 || 14 || 15 || 17 || 18 || 20 || 21 ||23 ||25 || 26 ||27 ||29 ||30 ||31)) {

    if (casilla.id === 1) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 3) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 4) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 6) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 8) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 9) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 11) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 13) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 14) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 16) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 17) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 19) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 21) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 22) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 24) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 27) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 29) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 31) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 33) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 36) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 38) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === 39) {
      if (casilla.id === propiedad.idCasilla) {
        console.log('entramos');
        if (propiedad.idJugador !== jugador.id) {
          console.log('a comprar');
          jugador.dinero -= propiedad.precio;
          propiedad.idJugador = jugador.id;
          await jugador.save();
          ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
        }
      }
    } else if (casilla.id === libre.idCasilla) {
      if (libre.tipo === 'partida') {
        console.log(jugador.dinero);
        jugador.dinero += 200;
        ctx.body = { message: ` ${jugador.nombre} ha pasado por salida` };
        console.log(jugador.dinero);
        await jugador.save();
      } else if (libre.tipo === 'arca comunal') {
        ctx.body = { message: `El banco paga $20 a ${jugador.nombre}` };
        console.log(jugador.dinero);
        jugador.dinero += 20;
        await jugador.save();
        console.log(jugador.dinero);
      } else if (libre.tipo === 'fortuna') {
        ctx.body = { message: `El banco paga $10 a ${jugador.nombre}` };
        console.log(jugador.dinero);
        jugador.dinero += 10;
        await jugador.save();
        console.log(jugador.dinero);
      } else if (libre.tipo === 'carcel') {
        ctx.body = { message: `${jugador.nombre} paga $10 al banco` };
        console.log(jugador.dinero);
        jugador.dinero -= 10;
        await jugador.save();
        console.log(jugador.dinero);
      } else if (libre.tipo === 'ir carcel') {
        ctx.body = { message: `${jugador.nombre} va a la carcel` };
        console.log(jugador.dinero);
        jugador.dinero -= 10;
        await jugador.save();
        console.log(jugador.dinero);
      } else if (libre.tipo === 'parking') {
        ctx.body = { message: `${jugador.nombre} recibe $10 del banco` };
        console.log(jugador.dinero);
        jugador.dinero += 10;
        await jugador.save();
        console.log(jugador.dinero);
      } else {
        throw new Error('La casilla no es de tipo Propiedad ni de tipo Libre');
      }
    }
  } catch (error) {
    console.log('kihubo');
    ctx.body = { error: error.message };
  }
});

module.exports = router;

// const Router = require('koa-router');

// const router = new Router();

// // Importar los modelos necesarios
// const {
//   Casilla, Propiedad, Jugador, Libre,
// } = require('../models');
// // const Casilla = require('../casilla.js');
// // const Propiedad = require('../propiedad.js');
// // const Libre = require('../libre.js');
// // const Jugador = require('../jugadors.js');
// router.post('casillas_libres', '/:idJugador', async (ctx) => {
// // Endpoint para manejar una casilla específica

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

//     const casilla = await Casilla.findOne({
//       where: {
//         id: idCasilla,
//       },
//     });

//     if (!casilla) {
//       throw new Error('No se encontró la casilla');
//     }

//     const libre = await Libre.findOne({
//       where: {
//         idCasilla: casilla.id,
//       },
//     });

//     const propiedad = await Propiedad.findOne({
//       where: {
//         idCasilla: casilla.id,
//       },
//     });

//     // if (casilla.id === (1 || 2 || 4 || 6 || 7 || 9 || 10 || 11 || 13 || 14 || 15 || 17 || 18 || 20 || 21 ||23 ||25 || 26 ||27 ||29 ||30 ||31)) {

//     if (casilla.id === 2) {
//       if (casilla.id === propiedad.idCasilla) {
//         console.log('entramos');
//         if (propiedad.idJugador != jugador.id) {
//           console.log('a comprar');
//           jugador.dinero -= propiedad.precio;
//           propiedad.idJugador = jugador.id;
//           ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
//         }
//       }
//     } else if (casilla.id == libre.idCasilla) {
//       if (libre.tipo === 'partida') {
//         console.log(jugador.dinero);
//         jugador.dinero += 200;
//         ctx.body = { message: ` ${jugador.nombre} ha pasado por salida` };
//         console.log(jugador.dinero);
//         await jugador.save();
//       } else if (libre.tipo === 'arca comunal') {
//         ctx.body = { message: `El banco paga $20 a ${jugador.nombre}` };
//         console.log(jugador.dinero);
//         jugador.dinero += 20;
//         await jugador.save();
//         console.log(jugador.dinero);
//       } else if (libre.tipo === 'fortuna') {
//         ctx.body = { message: `El banco paga $10 a ${jugador.nombre}` };
//         console.log(jugador.dinero);
//         jugador.dinero += 10;
//         await jugador.save();
//         console.log(jugador.dinero);
//       } else if (libre.tipo === 'carcel') {
//         ctx.body = { message: `${jugador.nombre} paga $10 al banco` };
//         console.log(jugador.dinero);
//         jugador.dinero -= 10;
//         await jugador.save();
//         console.log(jugador.dinero);
//       } else if (libre.tipo === 'ir carcel') {
//         ctx.body = { message: `${jugador.nombre} va a la carcel` };
//         console.log(jugador.dinero);
//         jugador.dinero -= 10;
//         await jugador.save();
//         console.log(jugador.dinero);
//       } else if (libre.tipo === 'parking') {
//         ctx.body = { message: `${jugador.nombre} recibe $10 del banco` };
//         console.log(jugador.dinero);
//         jugador.dinero += 10;
//         await jugador.save();
//         console.log(jugador.dinero);
//       } else {
//         throw new Error('La casilla no es de tipo Propiedad ni de tipo Libre');
//       }
//     }
//   } catch (error) {
//     console.log('kihubo');
//     ctx.body = { error: error.message };
//   }
// });

// module.exports = router;

// const Router = require('koa-router');

// const router = new Router();

// // Importar los modelos necesarios
// const {
//   Casilla, Propiedad, Jugador, Libre,
// } = require('../models');
// // const Casilla = require('../casilla.js');
// // const Propiedad = require('../propiedad.js');
// // const Libre = require('../libre.js');
// // const Jugador = require('../jugadors.js');
// router.post('casillas_libres', '/:idJugador', async (ctx) => {
// // Endpoint para manejar una casilla específica

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

//     const casilla = await Casilla.findOne({
//       where: {
//         id: idCasilla,
//       },
//     });

//     if (!casilla) {
//       throw new Error('No se encontró la casilla');
//     }

//     const libre = await Libre.findOne({
//       where: {
//         idCasilla: casilla.id,
//       },
//     });

//     const propiedad = await Propiedad.findOne({
//       where: {
//         idCasilla: casilla.id,
//       },
//     });

//     // if (casilla.id === (1 || 2 || 4 || 6 || 7 || 9 || 10 || 11 || 13 || 14 || 15 || 17 || 18 || 20 || 21 ||23 ||25 || 26 ||27 ||29 ||30 ||31)) {

//     if (casilla.id === 3) {
//       if (casilla.id === propiedad.idCasilla) {
//         console.log('entramos');
//         if (propiedad.idJugador != jugador.id) {
//           console.log('a comprar');
//           jugador.dinero -= propiedad.precio;
//           propiedad.idJugador = jugador.id;
//           ctx.body = { message: ` ${jugador.nombre} compra la propiedad ${propiedad.nombre}` };
//         }
//       }
//     } else if (casilla.id == libre.idCasilla) {
//       if (libre.tipo === 'partida') {
//         console.log(jugador.dinero);
//         jugador.dinero += 200;
//         ctx.body = { message: ` ${jugador.nombre} ha pasado por salida` };
//         console.log(jugador.dinero);
//         await jugador.save();
//       } else if (libre.tipo === 'arca comunal') {
//         ctx.body = { message: `El banco paga $20 a ${jugador.nombre}` };
//         console.log(jugador.dinero);
//         jugador.dinero += 20;
//         await jugador.save();
//         console.log(jugador.dinero);
//       } else if (libre.tipo === 'fortuna') {
//         ctx.body = { message: `El banco paga $10 a ${jugador.nombre}` };
//         console.log(jugador.dinero);
//         jugador.dinero += 10;
//         await jugador.save();
//         console.log(jugador.dinero);
//       } else if (libre.tipo === 'carcel') {
//         ctx.body = { message: `${jugador.nombre} paga $10 al banco` };
//         console.log(jugador.dinero);
//         jugador.dinero -= 10;
//         await jugador.save();
//         console.log(jugador.dinero);
//       } else if (libre.tipo === 'ir carcel') {
//         ctx.body = { message: `${jugador.nombre} va a la carcel` };
//         console.log(jugador.dinero);
//         jugador.dinero -= 10;
//         await jugador.save();
//         console.log(jugador.dinero);
//       } else if (libre.tipo === 'parking') {
//         ctx.body = { message: `${jugador.nombre} recibe $10 del banco` };
//         console.log(jugador.dinero);
//         jugador.dinero += 10;
//         await jugador.save();
//         console.log(jugador.dinero);
//       } else {
//         throw new Error('La casilla no es de tipo Propiedad ni de tipo Libre');
//       }
//     }
//   } catch (error) {
//     console.log('kihubo');
//     ctx.body = { error: error.message };
//   }
// });

// module.exports = router;
